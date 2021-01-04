import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './contants';
import { Post } from './entities/Post';
import microConfig from './mikro-orm.config';

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();

    // const post = orm.em.create(Post, {title: 'my first post1'});
    // await orm.em.persistAndFlush(post);

    const posts = await orm.em.find(Post, {});
    console.log('POSTS', posts);
}


main().catch(err => {
    console.log('ERROR BLIAD2', err)
});