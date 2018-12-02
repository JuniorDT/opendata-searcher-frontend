import React from 'react';
import {block} from 'bem-cn'
import {Base} from "app/common/Base";
import './style.less';

class Avatar extends Base {
    getSize() {
        const {size} = this.props;
        switch (size) {
            case 'small':
                return 'small';
            case 'large':
                return 'large';
            default:
                return 'medium';
        }
    }

    render() {
        const {className} = this.props;
        return <div className={this.bem('container', {size: this.getSize()}).mix(className)}> </div>
    }

    initBem() {
        this.bem = block('avatar');
    }
}

export {Avatar}