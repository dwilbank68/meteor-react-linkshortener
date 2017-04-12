import {Mongo} from 'meteor/mongo';
export const Links = new Mongo.Collection('links');
import validUrl from 'valid-url';
import {check, Match} from 'meteor/check';

Meteor.methods({
    'links.insert': function (url) {
        check(
            url,
            Match.Where(  url => validUrl.isUri(url) ) // throws error if no match
        );
        const token = Math.random().toString(36).slice(-5);
        Links.insert({url, token, clicks:0});
    }
})