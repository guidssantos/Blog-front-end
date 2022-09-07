import { Author } from 'components/shared-typed/author';
import { Category } from 'components/shared-typed/category';
import { formatDate } from '../../components/utils/format-date';
import * as Styled from './styles';

export type ArticleMetaProps = {
  createdAt: string;
  author: Author;
  categories: Category[];
};

export const ArticleMeta = ({
  createdAt,
  author,
  categories,
}: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        <span> Por </span>
        <a href={`/author/${author.slug}`}>{author.displayName}</a>
        <span className="separator"> | </span>
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        <span className="separator">|</span>

        <span className="categories">
          {categories.map((category) => {
            return (
              <span key={`article-meta-cat-${category.id}`}>
                <a href={`/category/${category.slug}`}>
                  {category.displayName}
                </a>
              </span>
            );
          })}
        </span>
      </p>
    </Styled.Wrapper>
  );
};
