// First problem
// Financial Forecast

// Baseline

var forecast = {
    title: {
        text: "Financial Forecast",
        anchor: "start"
    },
    data: {
        values: [
            {
                name: "Cotton",
                amounts: { projectRevenue: 0.6, cost: 0.6, income: 0.0 }
            },
            {
                name: "Soybeans",
                amounts: { projectRevenue: 0.5, cost: 0.5, income: 0.1 }
            },
            {
                name: "Corn",
                amounts: { projectRevenue: 2.0, cost: 1.9, income: 0.1 }
            },
            {
                name: "Wheat",
                amounts: { projectRevenue: 0.3, cost: 0.4, income: 0.0 }
            },
            {
                name: "Rice",
                amounts: { projectRevenue: 1.0, cost: 0.8, income: 0.2 }
            },
            {
                name: "Peanuts",
                amounts: { projectRevenue: 0.6, cost: 0.4, income: 0.2 }
            }
        ]
        // "transform": [
        //     { "calculate": "datum.amounts == 3 ? 'projectRevenue' : 'cost' : 'income'", "as": "pricing" }
        // ],
    },

    width: { step: 50 },
    layer: [
        {
            mark: "bar",
            encoding: {
                x: {
                    field: "name",
                    type: "nominal",
                    axis: {
                        labelAngle: 0
                    },
                    sort: "false"
                },
                y: {
                    title: "",
                    field: "amounts.projectRevenue",
                    type: "quantitative"
                },
                color: {
                    field: "amounts",
                    type: "nominal",
                    scale: { scheme: "category20b" }
                }
            },
            mark: "bar",
            encoding: {
                x: {
                    field: "name",
                    type: "nominal",
                    axis: {
                        labelAngle: 0
                    },
                    sort: "false"
                },
                y: {
                    title: "",
                    field: "amounts.cost",
                    type: "quantitative"
                },
                color: {
                    field: "amounts",
                    type: "nominal",
                    scale: { scheme: "category20b" }
                }
            },
            mark: "bar",
            encoding: {
                x: {
                    title: "",
                    field: "name",
                    type: "nominal",
                    axis: {
                        labelAngle: 0
                    },
                    sort: "false"
                },
                y: {
                    title: "",
                    field: "amounts.income",
                    type: "quantitative"
                },
                color: {
                    title: "",
                    field: "amounts.projectRevenue",
                    type: "nominal",
                    scale: { scheme: "category20b" },
                    legend: {
                        direction: "horizontal",
                        orient: "bottom"
                    }
                }
            }
        }
        // range: ["#14354D", "#d61b1b", "#088719"]

        // background: "cornflowerblue",
        // opacity: 0.33
    ]
};

// Successful layering of values on heat map squares!
var hmData = {
    data: {
        values: [
            { x: 1, y: 1, product: 1 },
            { x: 1, y: 2, product: 2 },
            { x: 1, y: 3, product: 3 },
            { x: 1, y: 4, product: 4 },
            { x: 1, y: 5, product: 5 },
            { x: 1, y: 6, product: 6 },
            { x: 1, y: 7, product: 7 },
            { x: 1, y: 8, product: 8 },
            { x: 1, y: 9, product: 9 },
            { x: 2, y: 1, product: 2 },
            { x: 2, y: 2, product: 4 },
            { x: 2, y: 3, product: 6 },
            { x: 2, y: 4, product: 8 },
            { x: 2, y: 5, product: 10 },
            { x: 2, y: 6, product: 12 },
            { x: 2, y: 7, product: 14 },
            { x: 2, y: 8, product: 16 },
            { x: 2, y: 9, product: 18 },
            { x: 3, y: 1, product: 3 },
            { x: 3, y: 2, product: 6 },
            { x: 3, y: 3, product: 9 },
            { x: 3, y: 4, product: 12 },
            { x: 3, y: 5, product: 15 },
            { x: 3, y: 6, product: 18 },
            { x: 3, y: 7, product: 21 },
            { x: 3, y: 8, product: 24 },
            { x: 3, y: 9, product: 27 },
            { x: 4, y: 1, product: 4 },
            { x: 4, y: 2, product: 8 },
            { x: 4, y: 3, product: 12 },
            { x: 4, y: 4, product: 16 },
            { x: 4, y: 5, product: 20 },
            { x: 4, y: 6, product: 24 },
            { x: 4, y: 7, product: 28 },
            { x: 4, y: 8, product: 32 },
            { x: 4, y: 9, product: 36 },
            { x: 5, y: 1, product: 5 },
            { x: 5, y: 2, product: 10 },
            { x: 5, y: 3, product: 15 },
            { x: 5, y: 4, product: 20 },
            { x: 5, y: 5, product: 25 },
            { x: 5, y: 6, product: 30 },
            { x: 5, y: 7, product: 35 },
            { x: 5, y: 8, product: 40 },
            { x: 5, y: 9, product: 45 },
            { x: 6, y: 1, product: 6 },
            { x: 6, y: 2, product: 12 },
            { x: 6, y: 3, product: 18 },
            { x: 6, y: 4, product: 24 },
            { x: 6, y: 5, product: 30 },
            { x: 6, y: 6, product: 36 },
            { x: 6, y: 7, product: 42 },
            { x: 6, y: 8, product: 48 },
            { x: 6, y: 9, product: 54 },
            { x: 7, y: 1, product: 7 },
            { x: 7, y: 2, product: 14 },
            { x: 7, y: 3, product: 21 },
            { x: 7, y: 4, product: 28 },
            { x: 7, y: 5, product: 35 },
            { x: 7, y: 6, product: 42 },
            { x: 7, y: 7, product: 49 },
            { x: 7, y: 8, product: 56 },
            { x: 7, y: 9, product: 63 },
            { x: 8, y: 1, product: 8 },
            { x: 8, y: 2, product: 16 },
            { x: 8, y: 3, product: 24 },
            { x: 8, y: 4, product: 32 },
            { x: 8, y: 5, product: 40 },
            { x: 8, y: 6, product: 48 },
            { x: 8, y: 7, product: 56 },
            { x: 8, y: 8, product: 64 },
            { x: 8, y: 9, product: 72 },
            { x: 9, y: 1, product: 9 },
            { x: 9, y: 2, product: 18 },
            { x: 9, y: 3, product: 27 },
            { x: 9, y: 4, product: 36 },
            { x: 9, y: 5, product: 45 },
            { x: 9, y: 6, product: 54 },
            { x: 9, y: 7, product: 63 },
            { x: 9, y: 8, product: 72 },
            { x: 9, y: 9, product: 81 }
        ]
    },
    encoding: {
        x: { field: "x", type: "ordinal", axis: { labelAngle: 0 } },
        y: { text: { axis: { labelAngle: 0 } }, field: "y", type: "ordinal" }
    },
    layer: [
        {
            mark: "rect",
            encoding: {
                color: {
                    title: "Product?",
                    field: "product",
                    type: "quantitative",
                    legend: { gradientLength: 200 }
                }
            }
        },
        {
            mark: "text",
            encoding: {
                text: { field: "product", type: "quantitative" },
                color: {
                    condition: {
                        test: "datum['product'] < 40",
                        value: "black"
                    },
                    value: "white"
                }
            }
        }
    ],
    config: {
        scale: { bandPaddingInner: 0, bandPaddingOuter: 0 },
        text: { baseline: "middle" }
    }
};

// Test-Template
// Assign the specification to a local variable vlSpec.
var vlSpec = {
    title: {
        text: "Template",
        anchor: "start"
    },
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    data: {
        values: [
            { a: "C", b: 2 },
            { a: "C", b: 7 },
            { a: "C", b: 4 },
            { a: "D", b: 1 },
            { a: "D", b: 2 },
            { a: "D", b: 6 },
            { a: "E", b: 8 },
            { a: "E", b: 4 },
            { a: "E", b: 7 }
        ]
    },
    mark: "bar",
    encoding: {
        y: { field: "a", type: "nominal" },
        x: {
            aggregate: "average",
            field: "b",
            type: "quantitative",
            axis: {
                title: "Average of b"
            }
        }
    }
};

// Embed the visualization in the container with id `vis`
// vegaEmbed(".vis", vlSpec);

vegaEmbed(".vis2", forecast);

vegaEmbed(".vis3", hmData);
