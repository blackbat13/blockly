'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([{
    "type": "clr",
    "message0": "CLR %1",
    "args0": [
      {
        "type": "field_number",
        "name": "index",
        "value": 0,
        "min": 0,
        "precision": 1
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Clear register",
    "helpUrl": ""
  },
  {
    "type": "z",
    "message0": "Z %1",
    "args0": [
      {
        "type": "field_number",
        "name": "index",
        "value": 0,
        "min": 0,
        "precision": 1
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Clear register",
    "helpUrl": ""
  },
  {
    "type": "inc",
    "lastDummyAlign0": "CENTRE",
    "message0": "INC %1",
    "args0": [
      {
        "type": "field_number",
        "name": "index",
        "value": 0,
        "min": 0,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Increment the contents of register",
    "helpUrl": ""
  },
  {
    "type": "s",
    "lastDummyAlign0": "CENTRE",
    "message0": "S %1",
    "args0": [
      {
        "type": "field_number",
        "name": "index",
        "value": 0,
        "min": 0,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Increment the contents of register",
    "helpUrl": ""
  },
  {
    "type": "dec",
    "message0": "DEC %1",
    "args0": [
      {
        "type": "field_number",
        "name": "index",
        "value": 0,
        "min": 0,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Decrement the contents of register",
    "helpUrl": ""
  },
  {
    "type": "cpy",
    "message0": "CPY %1 %2",
    "args0": [
      {
        "type": "field_number",
        "name": "index1",
        "value": 0,
        "min": 0,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "index2",
        "value": 0,
        "min": 0,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Copy the contents of first register to second one",
    "helpUrl": ""
  },
  {
    "type": "t",
    "message0": "T %1 %2",
    "args0": [
      {
        "type": "field_number",
        "name": "index1",
        "value": 0,
        "min": 0,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "index2",
        "value": 0,
        "min": 0,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Copy the contents of first register to second one",
    "helpUrl": ""
  },
  {
    "type": "jz",
    "message0": "JZ %1 %2",
    "args0": [
      {
        "type": "field_number",
        "name": "index",
        "value": 0,
        "min": 0,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "instruction",
        "value": 0,
        "min": 0,
        "precision": 1
      }
    ],
    "colour": 230,
    "tooltip": "If register contains zero then jumps to instruction",
    "helpUrl": ""
  },
  {
    "type": "je",
    "message0": "JE register1: %1 register2: %2 instruction: %3",
    "args0": [
      {
        "type": "field_number",
        "name": "index1",
        "value": 0,
        "min": 0,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "index2",
        "value": 0,
        "min": 0,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "instruction",
        "value": 0,
        "min": 0,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "If the contents of first register equals the contents of second register then jump to instruction",
    "helpUrl": ""
  },
  {
    "type": "i",
    "message0": "I m: %1 n: %2 q: %3",
    "args0": [
      {
        "type": "field_number",
        "name": "index1",
        "value": 0,
        "min": 0,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "index2",
        "value": 0,
        "min": 0,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "instruction",
        "value": 0,
        "min": 0,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "If the contents of first register equals the contents of second register then jump to instruction",
    "helpUrl": ""
  }
]);

  Blockly.JavaScript['clr'] = function(block) {
    var number_index = block.getFieldValue('index');
    var code = 'machine['+ number_index +'] = 0;\n';
    return code;
  };

  Blockly.JavaScript['z'] = function(block) {
    var number_index = block.getFieldValue('index');
    var code = 'machine['+ number_index +'] = 0;\n';
    return code;
  };
  
  Blockly.JavaScript['inc'] = function(block) {
    var number_index = block.getFieldValue('index');
    var code = 'machine['+ number_index +']++;\n';
    return code;
  };

  Blockly.JavaScript['s'] = function(block) {
    var number_index = block.getFieldValue('index');
    var code = 'machine['+ number_index +']++;\n';
    return code;
  };
  
  Blockly.JavaScript['dec'] = function(block) {
    var number_index = block.getFieldValue('index');
    var code = 'machine['+ number_index +']--;\n';
    return code;
  };
  
  Blockly.JavaScript['cpy'] = function(block) {
    var number_index1 = block.getFieldValue('index1');
    var number_index2 = block.getFieldValue('index2');
    var code = 'machine['+ number_index2 +'] = machine['+ number_index1 +'];\n';
    return code;
  };

  Blockly.JavaScript['t'] = function(block) {
    var number_index1 = block.getFieldValue('index1');
    var number_index2 = block.getFieldValue('index2');
    var code = 'machine['+ number_index2 +'] = machine['+ number_index1 +'];\n';
    return code;
  };
  
  Blockly.JavaScript['jz'] = function(block) {
    var number_index = block.getFieldValue('index');
    var number_instruction = block.getFieldValue('instruction');
    var code = 'if(machine[' + number_index + ']==0){current_instruction=' + (number_instruction-1) + ';}\n';
    return code;
  };
  
  Blockly.JavaScript['je'] = function(block) {
    var number_index1 = block.getFieldValue('index1');
    var number_index2 = block.getFieldValue('index2');
    var number_instruction = block.getFieldValue('instruction');
    var code = 'if(machine[' + number_index1 + ']==machine[' + number_index2 + ']){current_instruction=' + (number_instruction-1) + ';}\n';
    return code;
  };

  Blockly.JavaScript['i'] = function(block) {
    var number_index1 = block.getFieldValue('index1');
    var number_index2 = block.getFieldValue('index2');
    var number_instruction = block.getFieldValue('instruction');
    var code = 'if(machine[' + number_index1 + ']==machine[' + number_index2 + ']){current_instruction=' + (number_instruction-1) + ';}\n';
    return code;
  };