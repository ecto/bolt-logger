# bolt-logger

Get logs of your **bolt** messages!

Will you have any problems?

![nope](http://i.imgur.com/EV93l.jpg)

NOPE

# install

    npm install bolt-logger -g

# usage

````bash

~ $ bolt-logger -h

usage: bolt-logger [options]

Options:
  -h, --host   Redis hostname           [default: "localhost"]
  -p, --port   Redis port               [default: "6379"]
  -a, --auth   Authenticate with Redis
  -d, --debug  Print debug information
````

````bash

~ $ bolt-logger > bolt.log &
[1] 16097
~ $ tail -f bolt.log
{"blah":"blah"}
{"blah":"blah"}
~ $ fg
{"blah":"blah"}
{"blah":"blah"}
````

````bash

~ $ bolt-logger -d
````

# license

(The MIT License)

Copyright (c) 2011 Cam Pedersen <cam@onswipe.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

