import css from '../css/main.css';
import $ from 'jquery';

require("script-loader!../../node_modules/jquery/dist/jquery.min.js");
require("script-loader!../vendor/js/jquery.filtertable.min.js");

var $stuff = $('.some-content');

$stuff.append('<div class="some-content">Hello, I was appended by jQuery!</div>')

jQuery('.bands').filterTable({minRows: 0});
