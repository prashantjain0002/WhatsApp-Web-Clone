import dotenv from "dotenv";
import connectDB from "../config/db.js";
import { processPayload } from "../controllers/processPayloadController.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readPayloadFiles() {
  try {
    const payloadsDir = path.join(__dirname, "../payloads");

    // Check if payloads directory exists
    if (!fs.existsSync(payloadsDir)) {
      console.log("📁 Creating payloads directory...");
      fs.mkdirSync(payloadsDir, { recursive: true });
      return [];
    }

    const files = fs
      .readdirSync(payloadsDir)
      .filter((file) => file.endsWith(".json"))
      .sort();

    console.log(`📁 Found ${files.length} JSON files in payloads directory`);

    const payloads = [];

    for (const file of files) {
      try {
        const filePath = path.join(payloadsDir, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const payload = JSON.parse(fileContent);

        console.log(`📄 Loaded payload from: ${file}`);
        payloads.push(payload);
      } catch (parseError) {
        console.error(`❌ Error parsing ${file}:`, parseError.message);
      }
    }

    return payloads;
  } catch (error) {
    console.error("❌ Error reading payload files:", error);
    return [];
  }
}

async function processAllData() {
  try {
    console.log("🚀 Starting data processing from JSON files...");

    await connectDB();
    console.log("✅ Connected to database");

    const payloads = readPayloadFiles();

    if (payloads.length === 0) {
      console.log(
        "⚠️  No payload files found. Please add JSON files to the payloads folder."
      );
      process.exit(0);
    }

    for (let i = 0; i < payloads.length; i++) {
      const payload = payloads[i];
      console.log(`📝 Processing payload ${i + 1}/${payloads.length}`);
      await processPayload(payload);
    }

    console.log("🎉 All data processed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error processing data:", error);
    process.exit(1);
  }
}

processAllData();
