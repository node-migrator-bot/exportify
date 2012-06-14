exportify
=========

Generate require()-able javascript files from non-javascript files.

[![build status](https://secure.travis-ci.org/substack/exportify.png)](http://travis-ci.org/substack/exportify)

example
=======

command-line usage
------------------

```
$ for f in files/*.txt; do echo $f:; cat <(echo -n '  ') $f; done
files/a.txt:
  beep
files/b.txt:
  boop
```

```
$ ../bin/cmd.js -v files/*.txt
files/a.txt
files/b.txt
```

```
$ for f in files/*.js; do echo $f:; cat <(echo -n '  ') $f; done
files/a.txt.js:
  module.exports="beep\n"
files/b.txt.js:
  module.exports="boop\n"
```

api
---

``` js
var exportify = require('exportify');
var ex = exportify([ 'a.txt', 'b.txt' ]);

ex.on('export', function (file) {
    console.log('exported ' + file);
});

ex.on('end', function () {
    console.log('all done');
});
```

***

```
$ node ex.js 
exported files/a.txt
exported files/b.txt
all done
```

usage
=====

```
Usage: exportify OPTIONS [files]
  
  OPTIONS:
    -h, --help     show this message
    -e, --ext      only exportify files with this extension
    -v, --verbose  log a message for every file written

```

methods
=======

``` js
var exportify = require('exportify')
```

exportify(files, opts={})
------------------------

For each file in the `files` array,
generate a `file + '.js'` file that exports the file's contents.

Optionally, if `opts.ext` is set, only include files in the `files` list with
the `opts.ext` extension.

install
=======

With [npm](http://npmjs.org), to get the command-line tool do:

```
npm install -g exportify
```

and to install the library do:

```
npm install exportify
```

license
=======

MIT
