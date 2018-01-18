import singleSpaAngularMicroFrontend from '../util/single-spa-angular-mf';

const lifecycles = singleSpaAngularMicroFrontend({
    selector: 'app1-root',
    baseScriptUrl: '/apps/app1',
    scripts: [
        'inline.bundle.js',
        'polyfills.bundle.js',
        'styles.bundle.js',
        'vendor.bundle.js',
        'main.bundle.js'
    ]
});

export const bootstrap = [
    lifecycles.bootstrap
];

export const mount = [
    lifecycles.mount
];

export const unmount = [
    lifecycles.unmount
];
