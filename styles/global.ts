import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
      box-sizing: border-box;
    }

    html,
    body {
      height: 100%;
      background: #000;
      color: #8d8d8d;
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      scrollbar-gutter: stable;
      -moz-osx-font-smoothing: grayscale;
      min-height: 100vh;
    }

    a {
      color: inherit;
      text-decoration: none;
      line-height: 1.5;
    }

    ::placeholder {
      color: #fff;
      opacity: 1;
}

    p {
      line-height: 1.5;
    }

    ol, ul, li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .hljs {
      display: block;
      overflow-x: auto;
      background: #000;
      padding: 1rem;
      border: 1px solid #262626;
      border-radius: 10px;
      line-height: 1.5;
    }

    .hljs,
    .hljs-subst {
      color: #fff;
    }

    .hljs-selector-tag {
      color: #5DABFF;
    }

    .hljs-selector-id {
      color: #82F9F6;
      font-weight: bold;
    }

    .hljs-selector-class {
      color: #82F9F6;
    }

    .hljs-selector-attr {
      color: #82F9F6;
    }

    .hljs-selector-pseudo {
      color: #88C0D0;
    }

    .hljs-addition {
      background-color: rgba(163, 190, 140, 0.5);
    }

    .hljs-deletion {
      background-color: rgba(191, 97, 106, 0.5);
    }

    .hljs-built_in,
    .hljs-type {
      color: #82F9F6;
    }

    .hljs-class {
      color: #82F9F6;
    }

    .hljs-function {
      color: #88C0D0;
    }

    .hljs-function > .hljs-title {
      color: #88C0D0;
    }

    .hljs-keyword,
    .hljs-literal,
    .hljs-symbol {
      color: #5DABFF;
    }

    .hljs-number {
      color: #EA69D2;
    }

    .hljs-regexp {
      color: #EBCB8B;
    }

    .hljs-string {
      color: #DCFF50;
    }

    .hljs-title {
      color: #82F9F6;
    }

    .hljs-params {
      color: #fff;
    }

    .hljs-bullet {
      color: #5DABFF;
    }

    .hljs-code {
      color: #82F9F6;
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-formula {
      color: #82F9F6;
    }

    .hljs-strong {
      font-weight: bold;
    }

    .hljs-link:hover {
      text-decoration: underline;
    }

    .hljs-quote {
      color: #4C566A;
    }

    .hljs-comment {
      color: #4C566A;
    }

    .hljs-doctag {
      color: #82F9F6;
    }

    .hljs-meta,
    .hljs-meta-keyword {
      color: #5E81AC;
    }

    .hljs-meta-string {
      color: #A3BE8C;
    }

    .hljs-attr {
      color: #82F9F6;
    }

    .hljs-attribute {
      color: #fff;
    }

    .hljs-builtin-name {
      color: #5DABFF;
    }

    .hljs-name {
      color: #5DABFF;
    }

    .hljs-section {
      color: #88C0D0;
    }

    .hljs-tag {
      color: #5DABFF;
    }

    .hljs-variable {
      color: #fff;
    }

    .hljs-template-variable {
      color: #fff;
    }

    .hljs-template-tag {
      color: #5E81AC;
    }

    .abnf .hljs-attribute {
      color: #88C0D0;
    }

    .abnf .hljs-symbol {
      color: #EBCB8B;
    }

    .apache .hljs-attribute {
      color: #88C0D0;
    }

    .apache .hljs-section {
      color: #5DABFF;
    }

    .arduino .hljs-built_in {
      color: #88C0D0;
    }

    .aspectj .hljs-meta {
      color: #D08770;
    }

    .aspectj > .hljs-title {
      color: #88C0D0;
    }

    .bnf .hljs-attribute {
      color: #82F9F6;
    }

    .clojure .hljs-name {
      color: #88C0D0;
    }

    .clojure .hljs-symbol {
      color: #EBCB8B;
    }

    .coq .hljs-built_in {
      color: #88C0D0;
    }

    .cpp .hljs-meta-string {
      color: #82F9F6;
    }

    .css .hljs-built_in {
      color: #88C0D0;
    }

    .css .hljs-keyword {
      color: #D08770;
    }

    .diff .hljs-meta {
      color: #82F9F6;
    }

    .ebnf .hljs-attribute {
      color: #82F9F6;
    }

    .glsl .hljs-built_in {
      color: #88C0D0;
    }

    .groovy .hljs-meta:not(:first-child) {
      color: #D08770;
    }

    .haxe .hljs-meta {
      color: #D08770;
    }

    .java .hljs-meta {
      color: #D08770;
    }

    .ldif .hljs-attribute {
      color: #82F9F6;
    }

    .lisp .hljs-name {
      color: #88C0D0;
    }

    .lua .hljs-built_in {
      color: #88C0D0;
    }

    .moonscript .hljs-built_in {
      color: #88C0D0;
    }

    .nginx .hljs-attribute {
      color: #88C0D0;
    }

    .nginx .hljs-section {
      color: #5E81AC;
    }

    .pf .hljs-built_in {
      color: #88C0D0;
    }

    .processing .hljs-built_in {
      color: #88C0D0;
    }

    .scss .hljs-keyword {
      color: #5DABFF;
    }

    .stylus .hljs-keyword {
      color: #5DABFF;
    }

    .swift .hljs-meta {
      color: #D08770;
    }

    .vim .hljs-built_in {
      color: #88C0D0;
      font-style: italic;
    }

    .yaml .hljs-meta {
      color: #D08770;
    }

    /* Pagination */

    .container .title {
	font-size: 40px;
	font-weight: 600;
	margin: 40px 0;
}

.blog-container {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-gap: 30px;
	margin-top: 20px;
}

.blog-post {
	position: relative;
	height: 480px;
}

.blog-post .cover-img {
	width: 100%;
	height: 200px;
	object-fit: cover;
	border-radius: 10px;
}

.blog-post .title {
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 10px;
}

.blog-post .description {
	font-size: 16px;
	color: #828282;
	margin-bottom: 10px;
}

.blog-post .card-details {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	position: absolute;
	bottom: 0;
	width: 100%;
}

.card-details .lh-details {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.card-details .date {
	font-size: 14px;
	color: #828282;
}

.blog-post .read-more {
	font-size: 16px;
	font-weight: 600;
	color: #00a8ff;
	text-decoration: none;
	margin-top: 10px;
}

.blog-post .read-more:hover {
	text-decoration: underline;
}

.blog-post .author-img {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 10px;
}

ul {
	list-style: none;
}

.pagination {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	gap: 20px;
}

.pagination .page-number {
	font-size: 16px;
	font-weight: 600;
	color: #00a8ff;
	background: #fff;
	padding: 10px 20px;
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.5s ease;
}

.pagination .page-number:hover {
	color: #fff;
	background: #00a8ff;
}

.pagination .active {
	color: #fff;
	background: #00a8ff;
}

.pagination .active:hover {
	color: #00a8ff;
	background: #fff;
}
`;
