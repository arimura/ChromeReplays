export function createAddingCustomEventReplySteps(
    label: string,
     ecpm: number,
     mappingName:string,
     className: string,
     parameter: string,
      ){
    return  [
        {
            "type": "click",
            "target": "main",
            "selectors": [
                [
                    "material-button.add-custom-event-button > material-ripple"
                ],
                [
                    "xpath///*[@id=\"dart-1681548234254\"]/mediation-group-edit/div/mediation-group-editor/div/waterfall-ad-sources-table/div/admob-table/div/div[1]/div[2]/material-button[2]/material-ripple"
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
                    "xpath///*[@id=\"admob-overlay-container-inventory\"]/div[10]/material-dialog/focus-trap/div[2]/div/div[2]/div/div/material-input[1]/div[1]/div[1]/label/input"
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
                    "xpath///*[@id=\"admob-overlay-container-inventory\"]/div[10]/material-dialog/focus-trap/div[2]/div/div[2]/div/div/material-input[1]/div[1]/div[1]/label/input"
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
                    "xpath///*[@id=\"admob-overlay-container-inventory\"]/div[10]/material-dialog/focus-trap/div[2]/div/div[2]/div/div/material-input[2]/div[1]/div[1]"
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
                    "xpath///*[@id=\"admob-overlay-container-inventory\"]/div[10]/material-dialog/focus-trap/div[2]/div/div[2]/div/div/material-input[2]/div[1]/div[1]/label/input"
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
                    "xpath///*[@id=\"admob-overlay-container-inventory\"]/div[10]/material-dialog/focus-trap/div[2]/div/footer/div/div/div/material-yes-no-buttons/material-button[2]/material-ripple"
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
                    "#admob-overlay-container-inventory > div.pane._ngcontent-byz-25.modal.visible > material-dialog > focus-trap > div:nth-child(2) > div > div.main._ngcontent-byz-47.with-scroll-strokes > div > placement-settings-for-ad-source > div > div.placements._ngcontent-byz-56 > allocation-selection > div.allocation-field._ngcontent-byz-57.allocation-field-border > material-dropdown-select > dropdown-button"
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
                    "aria/マッピングをさらに追加"
                ],
                [
                    "#a3DF9831A-5F82-42D9-97EE-60A30590A347--0"
                ],
                [
                    "xpath///*[@id=\"a3DF9831A-5F82-42D9-97EE-60A30590A347--0\"]"
                ],
                [
                    "pierce/#a3DF9831A-5F82-42D9-97EE-60A30590A347--0"
                ],
                [
                    "text/マッピングをさらに追加"
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
                    "aria/マッピング名*"
                ],
                [
                    "div.placement-field > div:nth-of-type(1) input"
                ],
                [
                    "xpath///*[@id=\"admob-overlay-container-inventory\"]/div[10]/add-placement-setting-dialog/material-dialog/focus-trap/div[2]/div/div[2]/placement-card-base/div[2]/div[1]/material-input/div[1]/div[1]/label/input"
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
                    "aria/マッピング名*"
                ],
                [
                    "div.placement-field > div:nth-of-type(1) input"
                ],
                [
                    "xpath///*[@id=\"admob-overlay-container-inventory\"]/div[10]/add-placement-setting-dialog/material-dialog/focus-trap/div[2]/div/div[2]/placement-card-base/div[2]/div[1]/material-input/div[1]/div[1]/label/input"
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
                    "xpath///*[@id=\"admob-overlay-container-inventory\"]/div[10]/add-placement-setting-dialog/material-dialog/focus-trap/div[2]/div/div[2]/placement-card-base/div[2]/div[2]/material-input/div[1]/div[1]/label/input"
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
                    "xpath///*[@id=\"admob-overlay-container-inventory\"]/div[10]/add-placement-setting-dialog/material-dialog/focus-trap/div[2]/div/div[2]/placement-card-base/div[2]/div[2]/material-input/div[1]/div[1]/label/input"
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
                    "aria/Parameter（省略可）"
                ],
                [
                    "div.placement-field > div:nth-of-type(3) input"
                ],
                [
                    "xpath///*[@id=\"admob-overlay-container-inventory\"]/div[10]/add-placement-setting-dialog/material-dialog/focus-trap/div[2]/div/div[2]/placement-card-base/div[2]/div[3]/material-input/div[1]/div[1]/label/input"
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
                    "aria/Parameter（省略可）"
                ],
                [
                    "div.placement-field > div:nth-of-type(3) input"
                ],
                [
                    "xpath///*[@id=\"admob-overlay-container-inventory\"]/div[10]/add-placement-setting-dialog/material-dialog/focus-trap/div[2]/div/div[2]/placement-card-base/div[2]/div[3]/material-input/div[1]/div[1]/label/input"
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
                    "xpath///*[@id=\"admob-overlay-container-inventory\"]/div[10]/add-placement-setting-dialog/material-dialog/focus-trap/div[2]/div/footer/div/material-yes-no-buttons/material-button[2]/material-ripple"
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
                    "xpath///*[@id=\"admob-overlay-container-inventory\"]/div[10]/material-dialog/focus-trap/div[2]/div/footer/div/div/div/material-yes-no-buttons/material-button[2]/material-ripple"
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