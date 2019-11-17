site_src := fonts scripts $(_drafts/*) $(_includes/*) $(_layouts/*) $(_posts/*) $(_sass/*) $(assets/*) $(*.html) $(*.md)

site : $(site_src)
	jekyll build

fonts : $(assets/fonts/*) _scripts/encode_fonts.sh
	_scripts/encode_fonts.sh _assets/fonts/* > _includes/fonts.css

scripts : $(assets/scripts/*)
	terser _assets/scripts/* -m --source-map > _includes/scripts.js

.PHONY: clean
clean:
	rm -rf ./_site
