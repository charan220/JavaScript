/******************************************************************************
 *  Execution       :   1. default node         cmd> node anagramMain.js
 *                      2. if nodemon installed cmd> nodemon anagramMain.js
 *
 *  Purpose         : Anagram Detection.
 *
 *  @description    : One string is an anagram of another if the second is simply a rearrangement of the first. 
 *                    For example, 'heart' and 'earth' are anagrams...
 *
 *  @file           : anagramMain.js
 *  @overview       : find the anagram og given String. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Raavi Ramcharan<raavicharan33@gmail.com>
 *  @version        : 1.0
 *  @since          : 03-01-2020
 ******************************************************************************/
let readLinesync=require('readline-sync');
let objAnagram=require('./anagramBusinessLogic')
let string1=readLinesync.question("Enter the first string for anagram    ");
let string2=readLinesync.question("ENter the second string for anagram   ");
objAnagram.anagramOrNot(string1,string2);
