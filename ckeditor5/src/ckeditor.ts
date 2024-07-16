/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import {
  Bold,
  Code,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
} from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { ExportPdf } from '@ckeditor/ckeditor5-export-pdf';
import { ExportWord } from '@ckeditor/ckeditor5-export-word';
import {
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
} from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import {
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
} from '@ckeditor/ckeditor5-image';
import { ImportWord } from '@ckeditor/ckeditor5-import-word';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { Undo } from '@ckeditor/ckeditor5-undo';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { Markdown } from '@ckeditor/ckeditor5-markdown-gfm';

class Editor extends ClassicEditor {
    public static override builtinPlugins = [
    Code,
    CodeBlock,
    HorizontalLine,
    GeneralHtmlSupport,
    Markdown,
    Mention,
    Strikethrough,
    TodoList,
    SimpleUploadAdapter,
    ExportPdf,
    ExportWord,
    ImportWord,
    Autoformat,
    BlockQuote,
    Alignment,
    Subscript,
    Superscript,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    Highlight,
    RemoveFormat,
    Bold,
    CloudServices,
    Essentials,
    Heading,
    MediaEmbed,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    List,
    ListProperties,
    Paragraph,
    PasteFromOffice,
    SourceEditing,
    Table,
    TableToolbar,
    TextTransformation,
    Undo,
  ];

  public static override defaultConfig: EditorConfig = {
    toolbar: {
      items: [
        'undo',
        'redo',
        '|',
        'sourceEditing',
        '|',
        'heading',
        '|',
        'alignment',
        'outdent',
        'indent',
        '|',
        {
          label: 'Basic styles',
          icon: 'text',
          items: [
            'fontSize',
            'fontFamily',
            'fontColor',
            'fontBackgroundColor',
            'highlight',
            'superscript',
            'subscript',
            'code',
            '|',
            'removeFormat',
          ],
        },
        'bold',
        'italic',
        'strikethrough',
        '|',
        'bulletedList',
        'numberedList',
        'todoList',
        '|',
        'insertTable',
        '|',
        'link',
        'imageUpload',
        'mediaEmbed',
        'codeBlock',
        'blockQuote',
        'horizontalLine',
        '|',
        'exportPdf',
        'exportWord',
        'importWord',
      ],
    },
    language: 'zh-cn',
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
    exportPdf: {
      dataCallback: (editor) =>
        editor.getData({
          showSuggestionHighlights: true,
        }),
      stylesheets: ['EDITOR_STYLES'],
      converterOptions: {
        format: 'A4',
        margin_top: '20mm',
        margin_bottom: '20mm',
        margin_right: '12mm',
        margin_left: '12mm',
        page_orientation: 'portrait',
      },
      tokenUrl: false,
    },
    exportWord: {
      dataCallback: (editor) =>
        editor.getData({
          showSuggestionHighlights: true,
        }),
      stylesheets: ['EDITOR_STYLES'],
      converterOptions: {
        format: 'A4',
        margin_top: '20mm',
        margin_bottom: '20mm',
        margin_right: '12mm',
        margin_left: '12mm',
        orientation: 'portrait',
      },
      tokenUrl: false,
    },
    htmlSupport: {
      // 允许所有粘贴的样式和标签
      allow: [
        {
          name: /.*/,
          attributes: true,
          classes: true,
          styles: true,
        },
      ],
      disallow: [
        /* HTML features to disallow */
      ],
    },
    image: {
      toolbar: ['imageTextAlternative'],
    },
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
    },
  };
}

export default Editor;
