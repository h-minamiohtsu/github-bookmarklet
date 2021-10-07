DEST_TARGETS=dest/resize_image.min.js
.PHONY: help build all $(DEST_TARGETS)

help:
	@cat Makefile

build:
	docker build -t h-minamiohtsu/uglifyjs .

all: $(DEST_TARGETS)

$(DEST_TARGETS): dest/%.min.js:
	docker run -i h-minamiohtsu/uglifyjs --compress --mangle --mangle-props < ./src/$*.js > ./dest/$*.min.js
