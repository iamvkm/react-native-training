import {FlatList} from 'react-native';
import React from 'react';

import {PostCard} from './PostCard';
import {postsListPropsType, PostsPropsType} from './posts.type';
import {PostType} from '../../../models/posts.type';
import {useAppSelector} from '../../../redux/hooks';
import {emptyString} from '../../../constants/global.constants';
import localNumbers from '../../../constants/global.numbers';

/**
 * component to show list of posts
 * @param {PostsPropsType} postsProps
 * @returns {JSX.Element}
 */
const Posts: React.FC<PostsPropsType> = (
  postsProps: PostsPropsType,
): JSX.Element => {
  const {searchText} = postsProps;
  const {postsData} = useAppSelector(state => state.posts);

  /**
   * return list of posts matching searched text
   * @param {PostType} post
   * @returns {boolean}
   */
  const searchByText = (post: PostType): boolean => {
    return (
      post.title.toLowerCase().includes(searchText.toLowerCase()) ||
      searchText === emptyString
    );
  };

  const filteredPostsData = postsData.filter(searchByText);

  /**
   * list of posts
   * @param {postsListPropsType} postsListProps
   * @returns {JSX.Element}
   */
  const renderPosts = (postsListProps: postsListPropsType): JSX.Element => {
    const {item: post, index} = postsListProps;
    return <PostCard key={index} post={post} />;
  };

  return (
    <FlatList
      data={filteredPostsData}
      renderItem={renderPosts}
      maxToRenderPerBatch={localNumbers.posts.batchToRender}
      fadingEdgeLength={localNumbers.posts.listFadeLength}
    />
  );
};

export default Posts;
