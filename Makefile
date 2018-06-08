install:
	npm install
publish:
	npm publish
lint:
	npm run eslint .
run:
	npm run babel-node -- 'src/bin/gendiff.js' __tests__/__fixtures__/json/config1.json __tests__/__fixtures__/json/config2.json
test:
	npm test
build:
	rm -rf dist
	npm build
