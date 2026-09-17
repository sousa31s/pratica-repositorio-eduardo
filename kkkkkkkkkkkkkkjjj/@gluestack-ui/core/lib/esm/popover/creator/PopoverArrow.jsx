/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { usePopoverContent } from './PopoverContext';
import { getArrowStyles } from './utils';
const PopoverArrow = (StyledPopoverArrow) => forwardRef((props, ref) => {
    const { value: { placement, actualPlacement, updateArrowSize, arrowHeight, arrowWidth, arrowProps, updateArrowElement, isFlipped, }, } = usePopoverContent('PopoverContext');
    const additionalStyles = React.useMemo(() => {
        return getArrowStyles({
            height: arrowHeight,
            width: arrowWidth,
            actualPlacement,
        });
    }, [arrowHeight, arrowWidth, placement, actualPlacement]);
    React.useEffect(() => {
        var _a, _b, _c, _d;
        const ArrowComponent = (<StyledPopoverArrow ref={ref} onLayout={(event) => {
                const { height, width } = event.nativeEvent.layout;
                updateArrowSize({ height, width });
            }} {...props} style={[
                props === null || props === void 0 ? void 0 : props.style,
                arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.style,
                {
                    // To avoid border radius case
                    top: placement === 'right bottom' || placement === 'left bottom'
                        ? ((_a = arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.style) === null || _a === void 0 ? void 0 : _a.top) > 4
                            ? ((_b = arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.style) === null || _b === void 0 ? void 0 : _b.top) - 4
                            : (_c = arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.style) === null || _c === void 0 ? void 0 : _c.top
                        : (_d = arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.style) === null || _d === void 0 ? void 0 : _d.top,
                },
                additionalStyles,
            ]} 
        // data attributes for uniwind
        data-flip={isFlipped ? 'true' : 'false'} 
        // data attributes for nativewind
        dataSet={{ flip: isFlipped }} states={{
                flip: isFlipped,
            }}/>);
        updateArrowElement(ArrowComponent);
    }, [
        additionalStyles,
        placement,
        arrowHeight,
        arrowWidth,
        actualPlacement,
        JSON.stringify(arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.style),
    ]);
    return null;
});
export default PopoverArrow;
//# sourceMappingURL=PopoverArrow.jsx.map