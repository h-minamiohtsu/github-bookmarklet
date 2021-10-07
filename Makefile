DEST_TARGETS=dest/resize_image.min.js
DOCKER_IMAGE_NAME=h-minamiohtsu/uglifyjs
.PHONY: help build all $(DEST_TARGETS)

help:
	@cat Makefile

build:
	docker build -t $(DOCKER_IMAGE_NAME) .

all: $(DEST_TARGETS)

$(DEST_TARGETS): dest/%.min.js:
	docker run -i $(DOCKER_IMAGE_NAME) --compress --mangle --mangle-props < ./src/$*.js > ./dest/$*.min.js
