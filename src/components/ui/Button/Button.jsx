import './Button.css';

const variants = {
  primary: 'button--primary',
  secondary: 'button--secondary',
  outline: 'button--outline',
  ghost: 'button--ghost',
};

const sizes = {
  sm: 'button--sm',
  md: 'button--md',
  lg: 'button--lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const classes = [
    'button',
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
