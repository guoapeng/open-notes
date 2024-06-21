import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EditorConfig } from '@ckeditor/ckeditor5-core';
import Editor from 'ckeditor5-custom-build';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CKEditorModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  PRODUCTIVITY_PACK_LICENSE_KEY = '';
  title = 'angular';
  public Editor = Editor;
  htmlData: string = '<p>Hello, world!</p>';
  customEditorConfig: EditorConfig = {
    licenseKey: this.PRODUCTIVITY_PACK_LICENSE_KEY,
    language: 'en',
    toolbar: [
      'undo',
      'redo',
      '|',
      'sourceEditing',
      '|',
      'heading',
      '|',
      'bold',
      'italic',
      'strikethrough',
      'code',
      '|',
      'bulletedList',
      'numberedList',
      'todoList',
      '|',
      'link',
      'imageUpload',
      'insertTable',
      'blockQuote',
      'codeBlock',
      'horizontalLine',
      'specialCharacters',
    ],
    heading: {
      options: [
        {
          model: 'paragraph',
          title: 'Paragraph',
          class: 'ck-heading_paragraph',
        },
        {
          model: 'heading1',
          view: 'h1',
          title: 'Heading 1',
          class: 'ck-heading_heading1',
        },
        {
          model: 'heading2',
          view: 'h2',
          title: 'Heading 2',
          class: 'ck-heading_heading2',
        },
        {
          model: 'heading3',
          view: 'h3',
          title: 'Heading 3',
          class: 'ck-heading_heading3',
        },
        {
          model: 'heading4',
          view: 'h4',
          title: 'Heading 4',
          class: 'ck-heading_heading4',
        },
        {
          model: 'heading5',
          view: 'h5',
          title: 'Heading 5',
          class: 'ck-heading_heading5',
        },
        {
          model: 'heading6',
          view: 'h6',
          title: 'Heading 6',
          class: 'ck-heading_heading6',
        },
      ],
    },
    simpleUpload: {
      uploadUrl: 'http://localhost:8888/philoenglish-server/v1.0.0/article/uploadCover'
    },
    image: {
      toolbar: [
				'imageTextAlternative',
				'toggleImageCaption',
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side'
			]
    },
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
    },
  };
}
