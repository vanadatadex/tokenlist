# VANA Tokenlist

This repository maintains the static tokenlist for the **VANA network**, used in the DataDex ecosystem.

---

## 📄 Tokenlist Structure

Token data and metadata are defined in:

- `src/tokenlists/datadex/metadata.ts` – General metadata (name, logo, version)
- `src/tokenlists/datadex/tokens/vana.ts` – List of tokens on the VANA network

---

## 🛠 How to Update the Tokenlist

1. **Edit tokens** in:
- `src/tokenlists/datadex/tokens/vana.ts`

2. (If needed) Edit metadata in:
- `src/tokenlists/datadex/metadata.ts`


3. **Generate the updated tokenlist:**

```bash
npm install
npm run generate
