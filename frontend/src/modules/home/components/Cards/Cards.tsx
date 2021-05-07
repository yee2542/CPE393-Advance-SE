import { Card, Input, Modal, Tag } from "antd";
import React, { useState } from "react";
import { BookmarkEditInputDto } from "../../../../common/services/generate/generate-types";
import Tags, { TagType } from "../Tags/index";

const { Meta } = Card;
const { TextArea } = Input;

export interface CardProps {
  domain: string;
  original: string;
  note: string;
  _id: string;
  tags: TagType;
  onEdit?: (data: BookmarkEditInputDto) => void;
}

const VisibleCard: React.FC<CardProps & { onClick: () => void }> = (props) => (
  <div onClick={props.onClick}>
    <Meta title={props.domain} description={props.note} />
    <div style={{ height: "12px" }} />

    {/* tags */}
    {props.tags.map((el) => (
      <Tag key={el._id} style={{ minWidth: "3em", textAlign: "center" }}>
        {el.label}
      </Tag>
    ))}
  </div>
);

const ExpandCard: React.FC<
  CardProps & { visible: boolean; onSave: (save: BookmarkEditInputDto) => void }
> = (props) => {
  const [original, setOriginal] = useState(props.domain);
  const [note, setNote] = useState(props.note);

  const onSave = (s: boolean) => {
    //   save with new
    s &&
      props.onSave({
        _id: props._id,
        original: original,
        tags: [],
      });

    //   save the same
    !s &&
      props.onSave({
        _id: props._id,
        original: props.original,
        note: props.note,
      });
  };

  return (
    <Modal
      closeIcon={<div />}
      visible={props.visible}
      onCancel={() => onSave(false)}
      onOk={() => onSave(true)}
    >
      <Input
        value={original}
        onChange={(e) => setOriginal(() => e.target.value)}
      />
      <span style={{ fontWeight: "lighter" }}>{props.original}</span>
      <div style={{ height: "12px" }} />

      <TextArea
        rows={2}
        value={note}
        onChange={(e) => setNote(() => e.target.value)}
      />

      {/* tags */}
      <div style={{ height: "4px" }} />
      <Tags tags={props.tags} />
    </Modal>
  );
};

const Cards: React.FC<CardProps> = (props) => {
  const [expand, setExpand] = useState<boolean>(false);

  const onEdit = (data: BookmarkEditInputDto) => {
    setExpand(false);
    props.onEdit && props.onEdit(data);
  };

  const onClick = () => {
    setExpand(() => true);
  };

  return (
    <Card hoverable>
      {!expand && <VisibleCard {...props} onClick={onClick} />}
      {expand && <ExpandCard {...props} visible={expand} onSave={onEdit} />}
    </Card>
  );
};
export default Cards;
