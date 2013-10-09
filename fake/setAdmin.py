#!/usr/bin/python -u
# -*- coding: UTF-8 -*-

from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client['imgio']

users = db.users

for u in users.find():
	u['role'] = 'free'
	users.save(u)

me = users.find_one({"email":"test@gmail.com"})
me['role'] = 'admin'
users.save(me)