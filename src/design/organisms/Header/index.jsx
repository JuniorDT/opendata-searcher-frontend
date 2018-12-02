import React from 'react';
import {block} from 'bem-cn';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Base} from "app/common/Base";
import {login} from 'redux/actions/user';
import {ProfileBlock} from "design/molecules/ProfileBlock";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './style.less';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login
    }, dispatch)
}

function mapStateToProps() {
    return {};
}

class Header extends Base {
    render() {
        return <div className={this.bem('container')}>
            <div className={this.bem('inner-wrapper').mix('col-md-10')}>
                <div className={this.bem('logo').mix('col-8')}>
                    OpenData-sSearch
                </div>
                {this.renderProfileBlock()}
            </div>
        </div>
    }

    componentDidMount() {
        this.props.login();
    }

    renderProfileBlock() {
        return (
            <div className={this.bem('profile').mix('col-4')}>
                <UncontrolledDropdown size="sm">
                    <DropdownToggle className={this.bem('profile-select').toString()}>
                        <ProfileBlock nikname="VYACHESLAV"/>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Hello</DropdownItem>
                        <DropdownItem>Gye</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }

    initBem() {
        this.bem = block('header');
    }
}

const headerContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);

export {headerContainer as Header}