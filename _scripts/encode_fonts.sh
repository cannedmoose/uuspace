#!/bin/bash

# Converts a list of font files into base64 encoded CSS font families
# font names should be of the form <family>-<weigt>-<style>.<format>
for var in "$@"
do
		base_name=${var##*/}
		file_name=$(echo "$base_name" | cut -f 1 -d '.')
		format=$(echo "$base_name" | cut -f 2 -d '.')
		family=$(echo "$file_name" | cut -f 1 -d '-')
		weight=$(echo "$file_name" | cut -f 2 -d '-')
		style=$(echo "$file_name" | cut -f 3 -d '-')
		data=$(base64 -i $var -o -)
		cat <<EOD
@font-face {
    font-family: '$family';
    src: url(data:application/font-woff2;charset=utf-8;base64,$data) format('$format');
    font-weight: $weight;
    font-style: $style;
}

EOD
done