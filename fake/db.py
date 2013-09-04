#!/usr/bin/python -u
# -*- coding: UTF-8 -*-

from pymongo import MongoClient
from random import choice, randrange
from datetime import datetime
import codecs
import re

import urllib

# print urllib.urlopen('http://localhost:5000/shortener').read()

client = MongoClient('localhost', 27017)
db = client['imgio']

pictures = db.pictures
#rexp = re.compile(r'\?|!').sub
rexp = re.compile(r'　').sub
removep = re.compile(r'！|…|\?').sub

for line in codecs.open('outdb.txt','r',encoding="utf8"):
    line = line.strip().split(' ')
    url = line[0]
    words = '-'.join(line[1:])
    
    words = rexp('-', words.encode('utf8'))
    words = removep('', words)
    
    
    p = {}
    p['path'] = url
    p['shortlink'] = urllib.urlopen('http://localhost:5000/shortener').read().strip()
    p['createdAt'] = datetime.now()
    p['name'] = words
    
    i = pictures.find({'name': words}).count()
    if i > 0:
        print words
        p['permalink'] = p['name'] + str(i+1)
    else:
        p['permalink'] = p['name']
    
    pictures.save(p)

