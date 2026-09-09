# 🔖 Bookmarks++

**A simple, lightweight Chrome extension for saving and managing websites.**

Bookmarks++ gives you a quick way to save URLs and browser tabs, rename them, view their details, and manage your saved websites—all from a minimal interface.

---

## ✨ Features

* 🔗 **Save Input** — Save any URL manually.
* 🌐 **Save Tab** — Save your currently active browser tab.
* ✏️ **Rename** — Give saved websites custom names.
* ↗️ **Open Here** — Open a saved website in the current tab.
* ℹ️ **Details** — View the saved date and actual URL.
* 🗑️ **Delete** — Delete individual bookmarks.
* 🧹 **Delete All** — Remove all saved bookmarks.
* 💾 **Persistent Storage** — Bookmarks remain saved after closing Chrome.
* 🌍 **Favicons** — Automatically displays website icons when available.

---

# 📥 Installation

> **Note:** Bookmarks++ is currently distributed as an unpacked Chrome extension. This means you install it manually using Chrome's **Developer mode**.

### 1. Download Bookmarks++

Download the latest Bookmarks++ ZIP file from the project's **Releases** section.

After downloading, extract the ZIP file somewhere on your computer.

You should have a folder containing files similar to:

```text
Bookmarks++/
├── manifest.json
├── index.html
├── script.js
├── styles.css
└── Unknown.jpg
```

### 2. Open Chrome Extensions

In Google Chrome, open:

```text
chrome://extensions
```

You can also open it through:

**⋮ → Extensions → Manage Extensions**

### 3. Enable Developer Mode

Turn on **Developer mode** using the switch in the top-right corner.

### 4. Load Bookmarks++

Click:

**Load unpacked**

Then select the **Bookmarks++ folder** you extracted earlier.

Chrome will install the extension locally.

### 5. Pin Bookmarks++

Click the puzzle-piece **Extensions** button in Chrome's toolbar and pin **Bookmarks++** so you can access it easily.

🎉 **You're done!**

---

# 🚀 Using Bookmarks++

## Save a URL

Enter a URL into the input box and click:

**SAVE INPUT**

For example:

```text
https://github.com
```

Bookmarks++ will add it to your saved list.

---

## Save the Current Tab

Click:

**SAVE TAB**

Bookmarks++ will save the currently active browser tab and use its page title as the bookmark name.

---

## Rename a Bookmark

Right-click a saved bookmark and select:

**CHANGE NAME**

Type the new name and press **Enter**.

---

## Open a Bookmark

Right-click a saved bookmark and select:

**OPEN HERE**

The saved website will open in the current tab.

---

## View Details

Right-click a bookmark and select:

**DETAILS**

You can view:

* Date the bookmark was saved
* Actual URL

---

## Delete a Bookmark

Right-click a bookmark and select:

**DELETE**

The bookmark will immediately be removed.

---

## Delete Everything

Click:

**DELETE ALL**

to remove all saved bookmarks.

---

# 💾 How Storage Works

Bookmarks++ uses the browser's local `localStorage` to store bookmarks.

Each bookmark is represented by an object similar to:

```js
{
    id: 123456789,
    url: "https://example.com",
    name: "Example"
}
```

The bookmarks are stored locally under the:

```text
visited
```

key.

No account or external database is required.

---

# 🔐 Privacy

Bookmarks++ is designed to keep your saved bookmarks local.

Your saved bookmarks are stored in your browser using local storage.

The extension does not require you to create an account or send your bookmark collection to a server.

> Website favicons may be retrieved from Google's favicon service.

---

# 🛠️ Built With

* **HTML**
* **CSS**
* **JavaScript**
* **Chrome Extensions API**
* **localStorage**

---

# 📁 Project Structure

```text
Bookmarks++/
│
├── manifest.json      # Chrome extension configuration
├── index.html         # Extension interface
├── styles.css         # Styling
├── script.js          # Main functionality
└── Unknown.jpg        # Fallback favicon
```

---

# 🗺️ Roadmap

Possible future improvements:

* 🔍 Bookmark search
* 📂 Folders and categories
* ⭐ Favorites
* ↕️ Drag-and-drop ordering
* 🌙 Dark mode
* 📤 Import/export
* ⌨️ Keyboard shortcuts
* 🕒 Sort by date
* ↩️ Undo deletion
* 🎨 Custom themes
* ☁️ Optional synchronization

---

# 📜 License

This project is open source.

Add your preferred license here if you decide to distribute Bookmarks++ under a specific open-source license.

---

## ⭐ Support the Project

If you find **Bookmarks++** useful:

* ⭐ Star the repository
* 🐛 Report bugs
* 💡 Suggest features
* 🔧 Contribute improvements

**Thanks for using Bookmarks++!**
