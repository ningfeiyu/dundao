import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x0AFa53383d0916F2f669a27E69607a0aD586aD49");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "dun Head",
        description: "This NFT will give you access to dunDAO!",
        image: readFileSync("scripts/assets/dun0.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();