"use strict";
var chromeReplay = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/admob/adding-customevent-replay.ts
  var adding_customevent_replay_exports = {};
  __export(adding_customevent_replay_exports, {
    createAddingCustomEventReplyJSON: () => createAddingCustomEventReplyJSON
  });

  // src/admob/adding-customevent-replay-steps.ts
  function createAddingCustomEventReplySteps(label, ecpm, mappingName, className, parameter) {
    return [
      {
        "type": "click",
        "target": "main",
        "selectors": [
          [
            "material-button.add-custom-event-button > material-ripple"
          ],
          [
            'xpath///*[@id="dart-1681548234254"]/mediation-group-edit/div/mediation-group-editor/div/waterfall-ad-sources-table/div/admob-table/div/div[1]/div[2]/material-button[2]/material-ripple'
          ],
          [
            "pierce/material-button.add-custom-event-button > material-ripple"
          ]
        ],
        "offsetY": 31.6875,
        "offsetX": 60.328125
      },
      {
        "type": "click",
        "target": "main",
        "selectors": [
          [
            "material-input.label-input input"
          ],
          [
            'xpath///*[@id="admob-overlay-container-inventory"]/div[10]/material-dialog/focus-trap/div[2]/div/div[2]/div/div/material-input[1]/div[1]/div[1]/label/input'
          ],
          [
            "pierce/material-input.label-input input"
          ]
        ],
        "offsetY": 7.75,
        "offsetX": 50
      },
      {
        "type": "change",
        "value": label,
        "selectors": [
          [
            "material-input.label-input input"
          ],
          [
            'xpath///*[@id="admob-overlay-container-inventory"]/div[10]/material-dialog/focus-trap/div[2]/div/div[2]/div/div/material-input[1]/div[1]/div[1]/label/input'
          ],
          [
            "pierce/material-input.label-input input"
          ]
        ],
        "target": "main"
      },
      {
        "type": "click",
        "target": "main",
        "selectors": [
          [
            "material-input.ecpm-input div.top-section"
          ],
          [
            'xpath///*[@id="admob-overlay-container-inventory"]/div[10]/material-dialog/focus-trap/div[2]/div/div[2]/div/div/material-input[2]/div[1]/div[1]'
          ],
          [
            "pierce/material-input.ecpm-input div.top-section"
          ]
        ],
        "offsetY": 12.9453125,
        "offsetX": 19
      },
      {
        "type": "change",
        "value": ecpm,
        "selectors": [
          [
            "material-input.ecpm-input input"
          ],
          [
            'xpath///*[@id="admob-overlay-container-inventory"]/div[10]/material-dialog/focus-trap/div[2]/div/div[2]/div/div/material-input[2]/div[1]/div[1]/label/input'
          ],
          [
            "pierce/material-input.ecpm-input input"
          ]
        ],
        "target": "main"
      },
      {
        "type": "click",
        "target": "main",
        "selectors": [
          [
            "#admob-overlay-container-inventory material-button.btn-yes > material-ripple"
          ],
          [
            'xpath///*[@id="admob-overlay-container-inventory"]/div[10]/material-dialog/focus-trap/div[2]/div/footer/div/div/div/material-yes-no-buttons/material-button[2]/material-ripple'
          ],
          [
            "pierce/#admob-overlay-container-inventory material-button.btn-yes > material-ripple"
          ]
        ],
        "offsetY": 14.9453125,
        "offsetX": 28
      },
      {
        "type": "click",
        "target": "main",
        "selectors": [
          [
            '.allocation-field > material-dropdown-select > dropdown-button > div.button[aria-haspopup="listbox"][aria-invalid="false"]'
          ]
        ],
        "offsetY": 31.7265625,
        "offsetX": 121
      },
      {
        "type": "click",
        "target": "main",
        "selectors": [
          [
            "aria/\u30DE\u30C3\u30D4\u30F3\u30B0\u3092\u3055\u3089\u306B\u8FFD\u52A0"
          ],
          [
            "#a3DF9831A-5F82-42D9-97EE-60A30590A347--0"
          ],
          [
            'xpath///*[@id="a3DF9831A-5F82-42D9-97EE-60A30590A347--0"]'
          ],
          [
            "pierce/#a3DF9831A-5F82-42D9-97EE-60A30590A347--0"
          ],
          [
            "text/\u30DE\u30C3\u30D4\u30F3\u30B0\u3092\u3055\u3089\u306B\u8FFD\u52A0"
          ]
        ],
        "offsetY": 16.1640625,
        "offsetX": 102,
        "duration": 437.60000014305115
      },
      {
        "type": "click",
        "target": "main",
        "selectors": [
          [
            "aria/\u30DE\u30C3\u30D4\u30F3\u30B0\u540D*"
          ],
          [
            "div.placement-field > div:nth-of-type(1) input"
          ],
          [
            'xpath///*[@id="admob-overlay-container-inventory"]/div[10]/add-placement-setting-dialog/material-dialog/focus-trap/div[2]/div/div[2]/placement-card-base/div[2]/div[1]/material-input/div[1]/div[1]/label/input'
          ],
          [
            "pierce/div.placement-field > div:nth-of-type(1) input"
          ]
        ],
        "offsetY": 13,
        "offsetX": 77.5
      },
      {
        "type": "change",
        "value": mappingName,
        "selectors": [
          [
            "aria/\u30DE\u30C3\u30D4\u30F3\u30B0\u540D*"
          ],
          [
            "div.placement-field > div:nth-of-type(1) input"
          ],
          [
            'xpath///*[@id="admob-overlay-container-inventory"]/div[10]/add-placement-setting-dialog/material-dialog/focus-trap/div[2]/div/div[2]/placement-card-base/div[2]/div[1]/material-input/div[1]/div[1]/label/input'
          ],
          [
            "pierce/div.placement-field > div:nth-of-type(1) input"
          ]
        ],
        "target": "main"
      },
      {
        "type": "click",
        "target": "main",
        "selectors": [
          [
            "aria/Class Name"
          ],
          [
            "div.placement-field > div:nth-of-type(2) input"
          ],
          [
            'xpath///*[@id="admob-overlay-container-inventory"]/div[10]/add-placement-setting-dialog/material-dialog/focus-trap/div[2]/div/div[2]/placement-card-base/div[2]/div[2]/material-input/div[1]/div[1]/label/input'
          ],
          [
            "pierce/div.placement-field > div:nth-of-type(2) input"
          ]
        ],
        "offsetY": 6,
        "offsetX": 48.5
      },
      {
        "type": "change",
        "value": className,
        "selectors": [
          [
            "aria/Class Name"
          ],
          [
            "div.placement-field > div:nth-of-type(2) input"
          ],
          [
            'xpath///*[@id="admob-overlay-container-inventory"]/div[10]/add-placement-setting-dialog/material-dialog/focus-trap/div[2]/div/div[2]/placement-card-base/div[2]/div[2]/material-input/div[1]/div[1]/label/input'
          ],
          [
            "pierce/div.placement-field > div:nth-of-type(2) input"
          ]
        ],
        "target": "main"
      },
      {
        "type": "click",
        "target": "main",
        "selectors": [
          [
            "aria/Parameter\uFF08\u7701\u7565\u53EF\uFF09"
          ],
          [
            "div.placement-field > div:nth-of-type(3) input"
          ],
          [
            'xpath///*[@id="admob-overlay-container-inventory"]/div[10]/add-placement-setting-dialog/material-dialog/focus-trap/div[2]/div/div[2]/placement-card-base/div[2]/div[3]/material-input/div[1]/div[1]/label/input'
          ],
          [
            "pierce/div.placement-field > div:nth-of-type(3) input"
          ]
        ],
        "offsetY": 14,
        "offsetX": 27.5
      },
      {
        "type": "change",
        "value": parameter,
        "selectors": [
          [
            "aria/Parameter\uFF08\u7701\u7565\u53EF\uFF09"
          ],
          [
            "div.placement-field > div:nth-of-type(3) input"
          ],
          [
            'xpath///*[@id="admob-overlay-container-inventory"]/div[10]/add-placement-setting-dialog/material-dialog/focus-trap/div[2]/div/div[2]/placement-card-base/div[2]/div[3]/material-input/div[1]/div[1]/label/input'
          ],
          [
            "pierce/div.placement-field > div:nth-of-type(3) input"
          ]
        ],
        "target": "main"
      },
      {
        "type": "click",
        "target": "main",
        "selectors": [
          [
            "#admob-overlay-container-inventory material-button.btn-yes > material-ripple"
          ],
          [
            'xpath///*[@id="admob-overlay-container-inventory"]/div[10]/add-placement-setting-dialog/material-dialog/focus-trap/div[2]/div/footer/div/material-yes-no-buttons/material-button[2]/material-ripple'
          ],
          [
            "pierce/#admob-overlay-container-inventory material-button.btn-yes > material-ripple"
          ]
        ],
        "offsetY": 16.5,
        "offsetX": 29.5
      },
      {
        "type": "click",
        "target": "main",
        "selectors": [
          [
            "#admob-overlay-container-inventory material-button.btn-yes > material-ripple"
          ],
          [
            'xpath///*[@id="admob-overlay-container-inventory"]/div[10]/material-dialog/focus-trap/div[2]/div/footer/div/div/div/material-yes-no-buttons/material-button[2]/material-ripple'
          ],
          [
            "pierce/#admob-overlay-container-inventory material-button.btn-yes > material-ripple"
          ]
        ],
        "offsetY": 17.7265625,
        "offsetX": 36
      }
    ];
  }

  // src/admob/adding-customevent-replay.ts
  function createAddingCustomEventReplyJSON(title, tsv) {
    if (!title || title.trim().length === 0) {
      return { error: "Title cannot be null or empty" };
    }
    const steps = [];
    const lines = tsv.split("\n");
    lines.forEach((line) => {
      if (line.trim() === "")
        return;
      const [label, ecpm, mappingName, className, parameter] = line.split("	");
      const stepsFromLine = createAddingCustomEventReplySteps(
        label.trim(),
        ecpm.trim(),
        mappingName.trim(),
        className.trim(),
        parameter.trim()
      );
      steps.push(...stepsFromLine);
    });
    return {
      "title": title,
      "steps": steps
    };
  }
  return __toCommonJS(adding_customevent_replay_exports);
})();
