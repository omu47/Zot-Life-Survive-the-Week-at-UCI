---
## 🕹️ Zot-post: Your One-Click Social Media Game App

**Zot-post** is a desktop game simulation where you play the role of a UCI student trying to **survive the week by posting on social media**. Whether it's Instagram, LinkedIn, or Twitter, your in-game performance depends on your timing, mood, and strategy — in a gamified and engaging way!

---

### 🎯 Features

* 🖼️ **Beautiful UI**: Built using `tkinter` and styled for engagement.
* 📱 **Simulates Social Media Posts**: Make text, image, or video posts to multiple platforms.
* 💾 **Auto Save**: Game state is stored and updated using JSON files (`savegame.json`, `zotlife_save.json`).
* 🗂️ **Asset Handling**: Includes custom icons, visuals, and game assets.
* 📦 **Packaged App**: Built into a standalone `.exe` (no need for Python or any setup).

---

### 🗃️ Folder Structure

```
Zot-Life-Survive-the-Week-at-UCI/
├── assets/
│   └── ico.ico               # Custom app icon
├── dist/
│   └── windows/
│       └── ZotLife.exe       # The final Windows executable
├── main.py                   # Main game script
├── main.spec                 # PyInstaller configuration
├── savegame.json             # User save data (optional)
├── zotlife_save.json         # Game config/state (optional)
├── .gitignore
└── README.md
```

---

### 💻 How to Run

#### 🔹 Windows Users:

> 👉 [Download Zot-post `.exe`](https://github.com/omu47/Zot-Life-Survive-the-Week-at-UCI/tree/zotpost/dist/windows)

* No Python required. Just download and double-click to launch.

#### 🔹 Developers:

```bash
git clone https://github.com/omu47/Zot-Life-Survive-the-Week-at-UCI.git -b zotpost
cd Zot-Life-Survive-the-Week-at-UCI
python main.py
```

---

### 🛠️ Build Details (PyInstaller `.spec`)

You're using a PyInstaller `.spec` script to generate a `.exe` file with:

```python
icon=['assets\\ico.ico'],
console=False
```

✅ Hides the console window
✅ Includes icon
✅ Compresses build using `upx=True`

> This ensures a lightweight, portable `.exe` under `dist/windows/`.

---

### 🧠 How the Game Works

```mermaid
graph TD;
    A[Launch Game] --> B[Choose Media Type]
    B --> C{Select Platform}
    C -->|Instagram| D1[Post Image]
    C -->|LinkedIn| D2[Post Text]
    C -->|Twitter| D3[Post Tweet]
    D1 --> E[Score + Update]
    D2 --> E
    D3 --> E
    E --> F[Save JSON] --> B
```
<img width="1208" height="686" alt="Screenshot 2025-07-24" src="https://github.com/user-attachments/assets/e00503c0-6eef-4cea-9767-6b4e2bc47043" />
<img width="1335" height="659" alt="image" src="https://github.com/user-attachments/assets/970fc785-4268-42e1-8de1-1ec79bfa0073" />


---

### 🔀 Git Branches

* `main`: Core development branch (no builds).
* `zotpost`: Includes `.exe`, assets, and extra UI/gameplay logic.

---

### 🧾 License

MIT License © 2025 [omu47](https://github.com/omu47)

---
