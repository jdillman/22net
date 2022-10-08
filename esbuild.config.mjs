// esbuild.config.js
import esbuildServe from 'esbuild-serve';

process.env.NODE_ENV = 'de';

esbuildServe({
    entryPoints: ['src/index.tsx'],
    outfile: 'dist/index.js',
    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
    bundle: true,
    minify: true,
    format: 'cjs',
    sourcemap: true,
    // external: ['react', 'react-dom'],
});
