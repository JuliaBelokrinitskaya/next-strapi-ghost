import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'https://ghost-new.osome.com',
  key: '620e174520f3f8d8ff26cda9cd',
  version: 'v3',
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
    })
    .catch((err: string) => {
      console.error(err);
    });
}

export async function getPost(slug: string) {
  return await api.posts
    .read({
      slug,
    })
    .catch((err: string) => {
      console.error(err);
    });
}
