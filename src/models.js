import Realm from 'realm';

export const ArticleSchema = {
  name: 'Article',
  primaryKey: 'url',
  properties: {
    url: 'string',
    title: 'string',
    softTitle: 'string',
    date: 'string',
    author: 'string',
    publisher: 'string',
    text: 'string',
    image: 'string',
    tags: 'string[]',
    description: 'string',
    favicon: 'string',
    read: { type: 'bool', default: false },
  },
};

const databaseOptions = {
  path: 'scrawlr.app',
  schema: [ArticleSchema],
};

export const insertArticle = article => Realm.open(databaseOptions).then((realm) => {
  realm.write(() => {
    realm.create('Article', article);
    return article;
  });
}).catch((error) => { alert(error); });

export const updateTags = (url, tags) => Realm.open(databaseOptions).then((realm) => {
  realm.write(() => {
    realm.create('Article', { url, tags }, true);
  });
}).catch((error) => { console.log(error); });

export const deleteArticle = url => Realm.open(databaseOptions).then((realm) => {
  realm.write(() => {
    const selectedItem = realm.objectForPrimaryKey('Article', url);
    realm.delete(selectedItem);
  });
}).catch((error) => { console.log(error); });

export const deleteAllArticles = () => Realm.open(databaseOptions).then((realm) => {
  realm.write(() => {
    const allItems = realm.objects('Article');
    console.log(allItems);
    realm.delete(allItems);
  });
}).catch((error) => { console.log(error); });


export const getAllArticles = () => Realm.open(databaseOptions).then((realm) => {
  realm.write(() => {
    const allItems = realm.objects('Article');
    const urls = allItems.map(item => item.url);
    alert(urls);
    return allItems;
  });
}).catch((error) => { console.log(error); });

export default new Realm(databaseOptions);
