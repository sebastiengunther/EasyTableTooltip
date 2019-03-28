define([], function () {
    'use strict';
    
	return {
		type: "items",
		component: "accordion",
		items: {
			dimensions: {
				label: "Dimensions",
				component: "items",
				items: {
					dimensionsList: {
						type: "array",
						ref: "eTableTooltip.dimensionsList",
						label: "Dimensions",
						itemTitleRef: "eTableTooltip.field",
						allowAdd: true,
						allowRemove: true,
						addTranslation: "Add dimensions",
						items: {
							field: {
								type: "string",
								label: "Field",
								ref: "eTableTooltip.field",
								expression: "optional"
							},
							tooltip: {
								type: "string",
								label: "Tooltip",
								ref: "eTableTooltip.tooltip",
								expression: "optional"
							},
							tooltipType: {
								type: "string",
								component: "dropdown",
								label: "Tooltip type",
								ref: "eTableTooltip.tooltipType",
								options: [
									{
										value: "text",
										label: "Text"
									},
									{
										value: "image",
										label: "Image"
									}
								],
								defaultValue: "text"
							},
							tooltipTextColor: {
								ref: "eTableTooltip.tooltipTextColor",
								label: "Tooltip text color",
								component: "color-picker",
								type: "object",
								defaultValue: {
									color: "#fefefe"
								},
								show: function(e, n, i) {
									return e.eTableTooltip.tooltipType == 'text';
								}
							},
							tooltipFontSize: {
								ref: "eTableTooltip.tooltipFontSize",
								label: "Tooltip font size",
								type: "string",
								defaultValue: "14px",
								expression: "optional",
								show: function(e, n, i) {
									return e.eTableTooltip.tooltipType == 'text';
								}
							},
							tooltipBackgroundColor: {
								ref: "eTableTooltip.tooltipBackgroundColor",
								label: "Tooltip background",
								component: "color-picker",
								type: "object",
								defaultValue: {
									color: "#010101"
								}
							},
							tooltipPosition: {
								type: "string",
								component: "dropdown",
								label: "Tooltip position",
								ref: "eTableTooltip.tooltipPosition",
								options: [
									{
										value: "left",
										label: "Left"
									},
									{
										value: "top",
										label: "Top"
									},
									{
										value: "right",
										label: "Right"
									},
									{
										value: "bottom",
										label: "Bottom"
									}
								],
								defaultValue: "bottom"
							},
							tooltipAlignement: {
								type: "string",
								component: "dropdown",
								label: "Tooltip alignement",
								ref: "eTableTooltip.tooltipAlignement",
								options: [
									{
										value: "left",
										label: "Left"
									},
									{
										value: "center",
										label: "Center"
									},
									{
										value: "right",
										label: "Right"
									}
								],
								defaultValue: "center"
							},
							tooltipWidth: {
								ref: "eTableTooltip.tooltipWidth",
								label: "Tooltip width",
								type: "string",
								defaultValue: "300px",
								expression: "optional"
							}
						}
					}
				}
			},
			settings: {
				uses: "settings"
			},
			aboutPanel: {
				translation:"Common.About",
				type:"items",
				items: {
					about: {
						component: "EasyAbout",
						translation: "Common.About"
					}
				}
			}
		}
	};
	
});





















