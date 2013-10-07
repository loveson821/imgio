#!/bin/python

import os

renameList = ['safari-icon.png', 'chrome-icon.png']

for i in os.listdir('dist/images'):
	o = '.'.join(i.split('.')[1:])
	if o in renameList:
		os.rename('dist/images/'+i,'dist/images/'+o)


print 'After build End'