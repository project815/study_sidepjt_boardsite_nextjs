import { getToday } from "@/utility/common";
import { Tooltip } from "antd";
import Image from "next/image";
import {
  ImageDefaultAvator,
  ImageDislike,
  ImageFile,
  ImageLike,
  ImageLocation,
} from "../../../../../public/assets/images";
import * as S from "./BoardDetail.style";
import { IBoardDetailUIPropstype } from "./BoardDetail.type";

export default function BoardDetailUI(
  props: IBoardDetailUIPropstype
): JSX.Element {
  const { data, onClickMoveToBoardList, onClickMoveToBoardEdit } = props;

  return (
    <div>
      <S.Wrapper>
        <S.Content>
          <S.Header>
            <S.Avatar>
              <S.Info>
                <Image src={ImageDefaultAvator} alt="" width={40} height={40} />
                <S.InfoText>
                  <S.Writer>{data?.fetchBoard?.writer}</S.Writer>
                  <S.CreateAt>
                    DATE : {getToday(String(data?.fetchBoard?.createdAt))}
                  </S.CreateAt>
                </S.InfoText>
              </S.Info>
              <S.SubInfo>
                <Image src={ImageFile} alt="" width={25} height={25} />

                <Tooltip
                  placement="left"
                  title={data?.fetchBoard.boardAddress?.address}
                >
                  <Image src={ImageLocation} alt="" width={25} height={25} />
                  {/* <Button>LT</Button> */}
                </Tooltip>
              </S.SubInfo>
            </S.Avatar>
          </S.Header>
          <S.Body>
            <S.BoardTitle>{data?.fetchBoard.title}</S.BoardTitle>
            <S.ContnetImage>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/watch?v=gudwFBgQdYY"
              />

              {/* <Image src={ImageBoardDetail} alt="" width={920} /> */}
            </S.ContnetImage>
            <S.BoardContents>{data?.fetchBoard?.contents}</S.BoardContents>
            <S.BoardVideo></S.BoardVideo>
          </S.Body>
          <S.Footer>
            <Image src={ImageLike} alt="" />
            <Image src={ImageDislike} alt="" />
          </S.Footer>
        </S.Content>
        <S.ButtonWarpper>
          <S.Button onClick={onClickMoveToBoardList}>목록으로</S.Button>
          <S.Button onClick={onClickMoveToBoardEdit}>수정하기</S.Button>
          <S.Button>삭제하기</S.Button>
          {/* <Quiz03_02 /> */}
        </S.ButtonWarpper>
      </S.Wrapper>
    </div>
  );
}
