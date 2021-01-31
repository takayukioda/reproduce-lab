import React from 'react';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

import './Emoji.css'

export class Emoji extends React.Component {
  render() {
    return (
      <div>
        <Picker
          native={true}
          showPreview={false}
          showSkinTones={false}
          useButton={true}
        />
      </div>
    )
  }
}
