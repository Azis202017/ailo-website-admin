import { Btn, H5, P } from '../../../../../AbstractElements';
import { ModalTitle, TooltipsAndPopovers } from '../../../../../Constant/index';
import CommonModal from '../../common/modal';
import { Tooltip } from 'reactstrap';
import React, { Fragment, useState } from 'react';

const TooltipModal = () => {
  const [tooltippopover, setTooltipPopover] = useState(false);
  const Tooltippopovermodaltoggle = () => setTooltipPopover(!tooltippopover);
  const [tooltipBtn, setTooltipBtn] = useState(false);
  const toggleBtn = () => setTooltipBtn(!tooltipBtn);
  const [tooltipLink, setTooltipLink] = useState(false);
  const toggleLink = () => setTooltipLink(!tooltipLink);
  return (
    <Fragment>
      <Btn attrBtn={{ color: 'primary', onClick: Tooltippopovermodaltoggle }} >{TooltipsAndPopovers}</Btn>
      <CommonModal isOpen={tooltippopover} title={ModalTitle} toggler={Tooltippopovermodaltoggle} >
        <H5>{'Popover in a modal'}</H5>
        <P>{'This'} <Btn attrBtn={{ className: 'popover-test', color: 'primary', id: 'TooltipButtonExample' }}>{'button'}</Btn> {'triggers a popover on click.'}</P>
        <Tooltip placement="right" isOpen={tooltipBtn} target="TooltipButtonExample" toggle={toggleBtn}>
          This is button
        </Tooltip>
        <hr />
        <H5>{'Tooltips in a modal'}</H5>
        <P><a className="tooltip-test" href="#javascript" id="TooltipLinkExample" >{'that link'}</a> {'have tooltips on hover.'}</P>
        <Tooltip placement="right" isOpen={tooltipLink} target="TooltipLinkExample" toggle={toggleLink}>
          This is Link
        </Tooltip>
      </CommonModal>
    </Fragment>
  );
};

export default TooltipModal;