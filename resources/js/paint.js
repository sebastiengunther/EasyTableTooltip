define(["text!../css/EasyTableTooltip.css", "text!../css/EasyTableTooltipByDimension.css"],
function(css, cssByDimension) {

    'use strict';
		
	return function(element, layout, scope, object) {
		
		if(object != undefined) {
			object.columns.forEach(function(column, i) {
				column.unbind('mouseenter', object.mouseenter[i]);
				column.unbind('mouseleave', object.mouseleave[i]);
			});
		}
		
		object = {};										// Initialisation de l'objet courant
		object.columns = [];
		object.fields = [];
		object.mouseenter = [];
		object.mouseleave = [];
		object.cssByDimensions = [];
		object.id = layout.qInfo.qId;						// Attribution de l'id
		object.div = element;								// Attribution du <DIV> : Contient l'affichage de l'objet
		object.article = object.div.closest('article');		// Attribution du <ARTICLE> : Contient l'objet
		object.header = object.article.find('header');		// Attribution du <HEADER> : Contient le titre de l'objet
		
		object.article.attr('id', 'article-' + object.id);	// Attribution de l'id au <ARTICLE> (utilisé pour distinguer les objets dans le CSS)
		
		let style = $('style#style-' + object.id);			// Récupération du style de l'objet
		if(style.length == 0){								// Si il n'est pas encore défini
			style = $('<style>');							// On le crée
			style.attr('id', 'style-' + object.id);			// On lui met un identifiant
			style.appendTo('head');							// On l'ajoute au <HEAD>
		}
		object.css = css.split('%%_ARTICLE_ID_%%')			// On remplace %%_ARTICLE_ID_%% par l'id du <ARTICLE>
						   .join('article-' + object.id);	// Cela permet de rendre le CSS dynamique (chaque objet à son CSS)
		object.cssByDimension = cssByDimension.split('%%_ARTICLE_ID_%%')
						   .join('article-' + object.id);
		style.html(object.css);								// On défini le style
		
		
		
		element.html('');
		
		
		
		let dimensions = layout.eTableTooltip.dimensionsList;
		
	
		
		dimensions.forEach(function(dimension, i) {
			let field = dimension.eTableTooltip.field;
			let tooltip = dimension.eTableTooltip.tooltip;
			let span = $('<span>');

			span.addClass('eTableTooltip-span');
			span.attr('id', dimension.cId);

			if(dimension.eTableTooltip.tooltipType == 'image'){
				let img = $('<img>');
				img.attr('src', tooltip);
				span.append(img);
			}
			else {
				span.html(tooltip);
			}

			if(dimension.eTableTooltip.tooltipWidth != '') {
				span.css('max-width', dimension.eTableTooltip.tooltipWidth);
			}
			
			span.css({
				'background-color': dimension.eTableTooltip.tooltipBackgroundColor.color,
				'color': dimension.eTableTooltip.tooltipTextColor.color,
				'text-align': dimension.eTableTooltip.tooltipAlignement,
				'font-size': dimension.eTableTooltip.tooltipFontSize
			});

			object.cssByDimensions[i] = object.cssByDimension.split('%%_TOOLTIP_BACKGROUND_COLOR_%%')
															 .join(dimension.eTableTooltip.tooltipBackgroundColor.color)
															 .split('%%_ID_%%')
															 .join(dimension.cId);

			span.addClass('eTableTooltip-span-' + dimension.eTableTooltip.tooltipPosition);

			element.append(span);
			style.append(object.cssByDimensions[i]);

			if(field.length > 0 && tooltip.length > 0){		

					
				let f0 = function() {
					
					
					object.fields = object.fields.map(function(f) {
						if(f == field){
							return 'null';
						}
						else {
							return f;
						}
					});
					
					
					$('.qvt-sheet-container article *').each(function(){

						
						let tag = $(this);
						
						if(tag.html() == field) {

							let column;
							
							if(tag.parent().hasClass('lui-button')){
								column = tag.parent();
							}
							else {
								column = tag.parent().closest('th');
							}			

							
							
							let index = object.columns.map(function(c) { return c[0].id;}).indexOf(column[0].id);
							
							if(index >= 0) {
								column = object.columns[index];
								object.fields[index] = field;
							}

							let f1 = function(e) {
								let left = 0;
								let top = 0;

								tag.removeAttr('title');
								column.removeAttr('title');

								object.article.css('z-index', 8);
								span.show();

								if(dimension.eTableTooltip.tooltipPosition == 'left'){
									left = column.offset().left - span.width() - 30;
									top = column.offset().top + (column.height() / 2) - (span.height() / 2); //e.pageY - (span.height() / 2);
								}
								else if(dimension.eTableTooltip.tooltipPosition == 'top'){
									left = column.offset().left + (column.width() / 2) - (span.width() / 2); //e.pageX - (span.width() / 2);
									top = column.offset().top - span.height() - 20;
								}

								else if(dimension.eTableTooltip.tooltipPosition == 'right'){
									left = column.offset().left + column.width() + 15;
									top = column.offset().top + (column.height() / 2) - (span.height() / 2); //e.pageY - (span.height() / 2);
								}
								else if(dimension.eTableTooltip.tooltipPosition == 'bottom'){
									left = column.offset().left + (column.width() / 2) - (span.width() / 2); //e.pageX - (span.width() / 2);
									top = column.offset().top + column.height() + 20;
								}

								span.css({top: top, left: left});
							};

							let f2 = function() {
								span.hide();
								object.article.css('z-index', 2);
							};

							column.bind('mouseenter', f1);

							column.bind('mouseleave', f2);


							if(index >= 0) {
								column.unbind('mouseenter', object.mouseenter[index]);
								column.unbind('mouseleave', object.mouseleave[index]);
								object.mouseenter[index] = f1;
								object.mouseleave[index] = f2;
							}
							else {
								object.columns.push(column);
								object.mouseenter.push(f1);
								object.mouseleave.push(f2);
								object.fields.push(field);
							}
							
						}
					});
			
					let index = -1;
					while((index = object.fields.indexOf('null')) >= 0){
						object.columns[index].unbind('mouseenter', object.mouseenter[index]);
						object.columns[index].unbind('mouseenter', object.mouseenter[index]);
						object.columns.splice(index, 1);
						object.fields.splice(index, 1);
						object.mouseenter.splice(index, 1);
						object.mouseleave.splice(index, 1);
					};
			
				}
			
				setInterval(f0, 1000);
	
			}
		});
		
		
		
		return object;										// Pour finir on retourne l'objet
		
	}

});
	
	


