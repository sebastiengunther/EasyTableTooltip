# EasyTableTooltip

<p align="center">
  <img src="https://github.com/sebastiengunther/EasyTableTooltip/blob/master/easy-tabletooltip-preview.png?raw=true"/>
</p>
<br/>

## About

[EasyTableTooltip](https://github.com/sebastiengunther/EasyTableTooltip/) is a Qlik Sense extension, which allows you to add tooltip on Qlik table columns.
<br/>
It can contain text or image URL. It's possible to use expression.
<br/>
This extension is developped by [EasyNeo](https://www.easyneo.fr/).
<br/>
<br/>

## Download
  
| Version | Date | Compatibility | Link |
| --- | --- | --- | --- |
| `v1.0` | 28/03/2019 | Feb 2019 <br/> Nov 2018 <br/> (not tested in earlier versions) | [`Download`](https://github.com/sebastiengunther/EasyTableTooltip/archive/master.zip) |
  
<br/>

## Usage

1. First of all, download the extension and import it.
  <br/>

2. Open the application and sheet that contains the Qlik table you want to use [EasyTableTooltip] on (https://github.com/sebastiengunther/EasyTableTooltip/).
  <br/>

3. Add the extension on the sheet (it's transparent, because it displays nothing in the object).
  <br/>

4. Then, edit the extension object and add a new dimension.

    * `Field` (string, can be an expression)
      * It's the name of the column in the Qlik table
        > Note that the `Field` of the dimension must be exactly the same as the data column name in the Qlik table <br/>
        > For example, the "Field" can be "Sum(Value)"
      <br/>
      
    * `Tooltip` (string, can be an expression)
      * It's the tooltip that will be display on the Qlik table column
      <br/>
      
    * `Tooltip type` (select)
      * It's the type of the tooltip
      * __Text__ : the `Tooltip` is interpreted as HTML
      * __Image__ : the `Tooltip` is interpreted as an image URL
      <br/>
      
    * `Tooltip text color` (color, only if `Tooltip type` is a text)
      * It's the color of the text in the tooltip
      <br/>
      
    * `Tooltip font size` (string, can be an expression, only if `Tooltip type` is a text)
      * It's the font size of the text in the tooltip
      <br/>
      
    * `Tooltip background` (color)
      * It's the background color of the tooltip
      <br/>
      
    * `Tooltip position` (select)
      * It's the position of the tooltip
      * __Left__ : the tooltip will be at the left of the column title
      * __Right__ : the tooltip will be at the right of the column title
      * __Top__ : the tooltip will be at the top of the column title
      * __Bottom__ : the tooltip will be at the bottom of the column title
      <br/>
      
    * `Tooltip alignement` (select)
      * It's the alignement of the text in the tooltip
      * __Left__ : the text will be left aligned
      * __Center__ : the text will be center aligned
      * __Right__ : the text will be right aligned
      <br/>
      
    * `Tooltip width` (string, can be an expression)
      * It's the max width of the tooltip
        > Note that if the `Width` is too small for the text, then the text will go on the line
      <br/>

5. Finally, you can quit the edit mode and put your mouse on the Qlik table column title.


<br/>
<hr/>

[![EasyNEo](https://github.com/sebastiengunther/EasyTableTooltip/blob/master/resources/image/easyneo_transparent.png?raw=true)](https://www.easyneo.fr/)













