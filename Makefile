# Makefile
.PHONY: all build clean

TS_SOURCES = $(shell find docs -type f -name '*.ts')
JS_TARGETS = $(TS_SOURCES:.ts=.js)

all: $(JS_TARGETS)
build: $(JS_TARGETS)

%.js: %.ts
	tsc $< --outFile $@ --module system

clean:
	rm -f $(JS_TARGETS)
