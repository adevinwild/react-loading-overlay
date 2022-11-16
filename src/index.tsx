import React, { FC, SVGProps } from 'react';

export interface Props extends SVGProps<SVGElement> {
  color?: string;
  visible?: boolean;
  size?: number | string;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * The LoadingOverlay component is a simple overlay that can be used to block user interaction
 * while loading data or performing an action.
 * @param {Props} props
 * @param {string} [props.color='#001219'] - by default it's black but you can specify a color
 * @param {boolean} [props.visible=false] - Whether or not to show the overlay
 * @param {number} [props.size=32] - The size of the spinner
 * @param {number} [props.strokeWidth=4] - The width of the spinner
 *
 * @example
 * <LoadingOverlay visible={isLoading} />
 * @example
 * <LoadingOverlay visible={isLoading} color="#001219" size={32} strokeWidth={4} />
 * @example
 * <LoadingOverlay visible={isLoading} color="#001219" size="32px" strokeWidth="4px" />
 *
 *
 * @see {@link https://github.com/horhorou} for further information.
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const LoadingOverlay: FC<Props> = ({
  color,
  visible,
  size,
  strokeWidth,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="assertive"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFFCC',
        backdropFilter: 'blur(1px)',
      }}
    >
      <svg
        role="presentation"
        data-testid="loading-overlay-spinner"
        style={{ boxSizing: 'content-box' }}
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
      >
        <circle
          cx="8"
          cy="8"
          r="7"
          stroke={color}
          strokeOpacity="0.25"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
        ></circle>
        <path
          d="M15 8a7.002 7.002 0 00-7-7"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 8 8"
            to="360 8 8"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};
LoadingOverlay.defaultProps = {
  visible: false,
  color: '#001219',
  size: 32,
  strokeWidth: 4,
};
