"use strict";

var assert = require('assert');

var Note = require('../src/index').Note;

describe('Note', function () {
  it('should be parse the octave correctly', function () {
    const note = new Note('C2');
    assert.equal(note.octave, 2);
  });
});
