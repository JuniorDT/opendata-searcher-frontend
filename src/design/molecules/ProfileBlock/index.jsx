import React from 'react';
import {block} from 'bem-cn'
import {Base} from "app/common/Base";
import {Avatar} from "design/atoms/Avatar";
import './style.less';

class ProfileBlock extends Base {
    render() {
        const {nikname} = this.props;
        return <div className={this.bem('container')}>
            <Avatar size="medium" className={this.bem('avatar')}/>
            <div className={this.bem('nikname')}>{nikname}</div>
        </div>}

    initBem() {
        this.bem = block('profileBlock');
    }
}

export {ProfileBlock}