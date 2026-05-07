'use client'

type Props = {
  id?: string
  className?: string
  title?: string
}

export default function GHLForm({ id = 'inline-1RaPE7VWc7H4wmFkknGT', className = '' }: Props) {
  return (
    <div className={`ghl-form-container w-full shadow-md bg-white ${className}`}>
      <iframe
        src="https://api.opslyautomations.com/widget/form/1RaPE7VWc7H4wmFkknGT"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px', minHeight: '646px' }}
        id={id}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 3"
        data-height="646"
        data-layout-iframe-id={id}
        data-form-id="1RaPE7VWc7H4wmFkknGT"
        title="Request a Free Quote — Bright Broom Service"
      />
    </div>
  )
}
