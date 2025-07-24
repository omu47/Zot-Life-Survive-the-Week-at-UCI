import sys
from PyQt5.QtWidgets import (
    QApplication, QWidget, QPushButton, QVBoxLayout, QTextEdit,
    QFileDialog, QLabel, QCheckBox, QHBoxLayout, QFrame
)
from PyQt5.QtGui import QIcon, QFont, QPalette, QColor
from PyQt5.QtCore import Qt

class PostApp(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("✨ Multi-Platform Social Poster ✨")
        self.setGeometry(200, 200, 500, 600)
        self.setStyleSheet("background-color: #1e1e2f; color: #ffffff;")

        # Title
        title = QLabel("🚀 Share Your Post to Multiple Platforms")
        title.setFont(QFont("Segoe UI", 16, QFont.Bold))
        title.setAlignment(Qt.AlignCenter)

        # Caption
        self.caption = QTextEdit(self)
        self.caption.setPlaceholderText("Write your caption here...")
        self.caption.setStyleSheet("background-color: #2e2e3e; color: #fff; border-radius: 8px;")
        self.caption.setFont(QFont("Segoe UI", 10))

        # File Label
        self.file_label = QLabel("📁 No file selected")
        self.file_label.setFont(QFont("Segoe UI", 9))
        self.file_label.setStyleSheet("color: #ccc;")

        # File chooser button
        file_btn = QPushButton("📷 Choose Image/Video")
        file_btn.setStyleSheet(self.button_style())
        file_btn.clicked.connect(self.choose_file)

        # Platform Checkboxes
        self.fb = QCheckBox("Facebook")
        self.ig = QCheckBox("Instagram")
        self.li = QCheckBox("LinkedIn")
        self.tw = QCheckBox("Twitter (X)")
        for cb in [self.fb, self.ig, self.li, self.tw]:
            cb.setFont(QFont("Segoe UI", 10))
            cb.setStyleSheet("padding: 4px;")

        # Post button
        post_btn = QPushButton("🚀 Post Now")
        post_btn.setStyleSheet(self.button_style("#4CAF50"))
        post_btn.setFont(QFont("Segoe UI", 11, QFont.Bold))
        post_btn.clicked.connect(self.post_content)

        # Layouts
        layout = QVBoxLayout()
        layout.addWidget(title)
        layout.addSpacing(10)
        layout.addWidget(QLabel("📝 Caption:"))
        layout.addWidget(self.caption)
        layout.addSpacing(10)
        layout.addWidget(file_btn)
        layout.addWidget(self.file_label)

        layout.addSpacing(20)
        layout.addWidget(QLabel("📤 Select Platforms:"))
        layout.addWidget(self.fb)
        layout.addWidget(self.ig)
        layout.addWidget(self.li)
        layout.addWidget(self.tw)

        layout.addStretch()
        layout.addWidget(post_btn)

        self.setLayout(layout)
        self.file_path = ""

    def button_style(self, bg="#2D89EF"):
        return f'''
            QPushButton {{
                background-color: {bg};
                color: white;
                padding: 10px;
                border-radius: 8px;
            }}
            QPushButton:hover {{
                background-color: #1e6ec1;
            }}
        '''

    def choose_file(self):
        file, _ = QFileDialog.getOpenFileName(self, "Select Media")
        if file:
            self.file_path = file
            self.file_label.setText(f"📁 Selected: {file.split('/')[-1]}")

    def post_content(self):
        text = self.caption.toPlainText()
        print("Posting caption:", text)
        print("File:", self.file_path if self.file_path else "No media selected")
        if self.fb.isChecked():
            print("➡️ Posting to Facebook")
        if self.ig.isChecked():
            print("➡️ Posting to Instagram")
        if self.li.isChecked():
            print("➡️ Posting to LinkedIn")
        if self.tw.isChecked():
            print("➡️ Posting to Twitter")
        print("✅ All posts simulated!")


if __name__ == '__main__':
    app = QApplication(sys.argv)
    app.setStyle("Fusion")
    window = PostApp()
    window.show()
    sys.exit(app.exec_())
