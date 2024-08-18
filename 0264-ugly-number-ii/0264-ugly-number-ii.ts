function nthUglyNumber(n: number): number {
    const ugly = Array( n ); ugly[ 0 ] = 1;
    let p2 = 0, p3 = 0, p5 = 0;
    for ( let i = 1; i < n; i++ ) {
        const next = Math.min( ugly[ p2 ] * 2, ugly[ p3 ] * 3, ugly[ p5 ] * 5 );
        ugly[ i ] = next;
        if ( next % 2 === 0 ) p2++;
        if ( next % 3 === 0 ) p3++;
        if ( next % 5 === 0 ) p5++;
    }
    return ugly[ n - 1 ];
}