import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

export default function ProductDescriptionEditor() {
  const editorRef = useRef(null);

  const handleEditorChange = (content: string) => {
    console.log("Content was updated:", content);
  };

  return (
    <Editor
      apiKey="2wgwudekky0t8rfj7j0et4hk5jljft4ryqfzo4fxpwawi9px"
      onInit={(evt, editor) => (editorRef.current = editor)}
      initialValue=""
      init={{
        directionality: "ltr",
        language: "en",
        height: 200,
        menubar: false,
        branding: false,
        statusbar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "fullscreen",
          "insertdatetime",
          "table",
          "code",
          "help",
          "wordcount",
          "emoticons",
        ],
        toolbar:
          "styles | bold italic underline strikethrough forecolor | align | moreextras | code",
        toolbar_mode: "wrap",
        toolbar_items_size: "small",
        align: "left center right justify",
        setup: (editor) => {
          editor.ui.registry.addMenuButton("moreextras", {
            text: "\u2026", // Unicode character for ellipsis
            tooltip: "More options",
            style: "font-size: 20px; font-weight: bold;",
            fetch: (callback) => {
              const items = [
                {
                  type: "nestedmenuitem",
                  text: "Lists",
                  icon: "unordered-list", // Changed parent list icon
                  getSubmenuItems: () => [
                    {
                      type: "menuitem",
                      text: "Bullet list",
                      icon: "unordered-list", // Changed bullet list icon
                      onAction: () => editor.execCommand("InsertUnorderedList"),
                    },
                    {
                      type: "menuitem",
                      text: "Numbered list",
                      icon: "ordered-list", // Changed numbered list icon
                      onAction: () => editor.execCommand("InsertOrderedList"),
                    },
                  ],
                },
                {
                  type: "menuitem",
                  text: "Emoji",
                  icon: "emoji", // Changed icon
                  onAction: () => editor.execCommand("mceEmoticons"),
                },
                {
                  type: "menuitem",
                  text: "Fullscreen",
                  icon: "fullscreen",
                  onAction: () => editor.execCommand("mceFullScreen"),
                },
              ];
              callback(items);
            },
          });
        },
      }}
      onEditorChange={handleEditorChange}
    />
  );
}
