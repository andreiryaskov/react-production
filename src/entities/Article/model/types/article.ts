export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}
export enum ArticleBlockType {
    CODE = 'CODE',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE'

}
export interface ArticleBlockBase {
    id: string,
    type: ArticleBlockType,
}

export interface ArticleTextBlock extends ArticleBlockBase{
    type: ArticleBlockType.TEXT,
    title?: string,
    paragraphs: string[],
}
export interface ArticleCodeBlock extends ArticleBlockBase{
    type: ArticleBlockType.CODE,
    code: string,
}
export interface ArticleImageBlock extends ArticleBlockBase{
    type: ArticleBlockType.IMAGE,
    src: string,
    title: string,
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;
export interface Article {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ArticleBlockBase[]
}
