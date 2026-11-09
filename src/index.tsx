const window = globalThis as any;

function xe(fingerprint: any[]) {
    var A = {
        pl: fingerprint,
        cbid: "f17868c8-6d7c-490f-8fb9-a05e5df2eb61",
    };

    window.arkl = A;
    window.arkl.caasgs = function (t) {
        for (
            var n = new Uint8Array(t), r = "", o = 0;
            o < n.byteLength;
            o += 1
        ) {
            r += String.fromCharCode(n[o]);
        }

        return btoa(r);
    };
    window.arkl.basdga = function (t) {
        var n = atob(t);

        for (var r = n.length, o = new Uint8Array(r), i = 0; i < r; i += 1) {
            o[i] = n.charCodeAt(i);
        }

        return o.buffer;
    };
    window.arkl.aagesg = function (t) {
        return new TextEncoder().encode(t);
    };
}

async function Ee(url: string, public_key: string) {
    window.arkl.crypto = crypto;
    window.arkl.cryptoType = "crypto";
}

async function An() {}

async function Rn(fingerprint: any[], url: string, public_key: string) {
    var D = url,
        L = public_key;

    try {
        xe(fingerprint);

        await Ee(D, L);

        await An();
    } catch (error) {
        var q: Record<any, any> = {};
        q.error = "WINDOW_AND_POLYFIL_SETUP_ERROR";
        q.msg = ""; // to reverse

        window.arkl = undefined;

        return {
            data: {},
            timestamp: 0,
        };
    }
}

console.log(
    Rn(
        [
            {
                key: "api_type",
                value: "js",
            },
            {
                key: "f",
                value: "a0f6d11546a8c3e3ba5532c540adc91f",
            },
            {
                key: "n",
                value: "MTc5NDI1ODU4Nw==",
            },
            {
                key: "wh",
                value: "aae469dc4e1a6f5e31c7c91f1a531d4b|79169737225f825ee428975a81c22b8f",
            },
            {
                key: "enhanced_fp",
                value: [
                    {
                        key: "webgl_extensions",
                        value: "ANGLE_instanced_arrays;EXT_blend_minmax;EXT_clip_control;EXT_color_buffer_half_float;EXT_depth_clamp;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_polygon_offset_clamp;EXT_texture_compression_bptc;EXT_texture_compression_rgtc;EXT_texture_filter_anisotropic;EXT_texture_mirror_clamp_to_edge;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_blend_func_extended;WEBGL_color_buffer_float;WEBGL_compressed_texture_astc;WEBGL_compressed_texture_etc;WEBGL_compressed_texture_etc1;WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw",
                    },
                    {
                        key: "webgl_extensions_hash",
                        value: "48fc6a044d17691891152ae0f6f290e6",
                    },
                    {
                        key: "webgl_renderer",
                        value: "WebKit WebGL",
                    },
                    {
                        key: "webgl_vendor",
                        value: "WebKit",
                    },
                    {
                        key: "webgl_version",
                        value: "WebGL 1.0 (OpenGL ES 2.0 Chromium)",
                    },
                    {
                        key: "webgl_shading_language_version",
                        value: "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)",
                    },
                    {
                        key: "webgl_aliased_line_width_range",
                        value: "[1, 2048]",
                    },
                    {
                        key: "webgl_aliased_point_size_range",
                        value: "[1, 2048]",
                    },
                    {
                        key: "webgl_antialiasing",
                        value: "yes",
                    },
                    {
                        key: "webgl_bits",
                        value: "8,8,24,8,8,0",
                    },
                    {
                        key: "webgl_max_params",
                        value: "16,64,16384,1024,16384,32,16384,32,16,32,1024",
                    },
                    {
                        key: "webgl_max_viewport_dims",
                        value: "[16384, 16384]",
                    },
                    {
                        key: "webgl_unmasked_vendor",
                        value: "Google Inc. (AMD)",
                    },
                    {
                        key: "webgl_unmasked_renderer",
                        value: "ANGLE (AMD, AMD Radeon RX 6650 XT (radeonsi navi23 ACO), OpenGL ES 3.2)",
                    },
                    {
                        key: "webgl_vsf_params",
                        value: "23,127,127,10,15,15,10,15,15",
                    },
                    {
                        key: "webgl_vsi_params",
                        value: "0,31,30,0,15,14,0,15,14",
                    },
                    {
                        key: "webgl_fsf_params",
                        value: "23,127,127,10,15,15,10,15,15",
                    },
                    {
                        key: "webgl_fsi_params",
                        value: "0,31,30,0,15,14,0,15,14",
                    },
                    {
                        key: "webgl_hash_webgl",
                        value: "05a3c5db50ee3905d272f70efe361dc6",
                    },
                    {
                        key: "user_agent_data_brands",
                        value: "Not-A.Brand,Google Chrome,Chromium",
                    },
                    {
                        key: "user_agent_data_mobile",
                        value: false,
                    },
                    {
                        key: "navigator_connection_downlink",
                        value: 9.3,
                    },
                    {
                        key: "navigator_connection_downlink_max",
                        value: null,
                    },
                    {
                        key: "network_info_rtt",
                        value: 50,
                    },
                    {
                        key: "network_info_save_data",
                        value: false,
                    },
                    {
                        key: "network_info_rtt_type",
                        value: null,
                    },
                    {
                        key: "screen_pixel_depth",
                        value: 24,
                    },
                    {
                        key: "navigator_device_memory",
                        value: 32,
                    },
                    {
                        key: "navigator_languages",
                        value: "fr-FR,fr,en-US,en",
                    },
                    {
                        key: "window_inner_width",
                        value: 366,
                    },
                    {
                        key: "window_inner_height",
                        value: 342,
                    },
                    {
                        key: "window_outer_width",
                        value: 1920,
                    },
                    {
                        key: "window_outer_height",
                        value: 993,
                    },
                    {
                        key: "3f38662",
                        value: 1,
                    },
                    {
                        key: "browser_detection_firefox",
                        value: false,
                    },
                    {
                        key: "browser_detection_brave",
                        value: false,
                    },
                    {
                        key: "9f41a2c",
                        value: false,
                    },
                    {
                        key: "5c273b3",
                        value: false,
                    },
                    {
                        key: "ce4046e",
                        value: false,
                    },
                    {
                        key: "f58835f",
                        value: "6681f2144d3d1ceb383fe87f7aad9600",
                    },
                    {
                        key: "browser_object_checks",
                        value: "554838a8451ac36cb977e719e9d6623c",
                    },
                    {
                        key: "29s83ih9",
                        value: "68934a3e9455fa72420237eb05902327⁣",
                    },
                    {
                        key: "audio_codecs",
                        value: '{"ogg":"probably","mp3":"probably","wav":"probably","m4a":"maybe","aac":"probably"}',
                    },
                    {
                        key: "audio_codecs_extended_hash",
                        value: "805036349642e2569ec299baed02315b",
                    },
                    {
                        key: "video_codecs",
                        value: '{"ogg":"","h264":"probably","webm":"probably","mpeg4v":"","mpeg4a":"","theora":""}',
                    },
                    {
                        key: "video_codecs_extended_hash",
                        value: "5648501a58d24ea22ce3773cc234e563",
                    },
                    {
                        key: "media_query_dark_mode",
                        value: true,
                    },
                    {
                        key: "f9bf2db",
                        value: '{"pc":"no-preference","ah":"hover","ap":"fine","p":"fine","h":"hover","u":"fast","prm":"no-preference","prt":"no-preference","s":"enabled","fc":"none"}',
                    },
                    {
                        key: "headless_browser_phantom",
                        value: false,
                    },
                    {
                        key: "headless_browser_selenium",
                        value: false,
                    },
                    {
                        key: "headless_browser_nightmare_js",
                        value: false,
                    },
                    {
                        key: "862f2c1",
                        value: 4,
                    },
                    {
                        key: "document__referrer",
                        value: "https://test.cap.guru/",
                    },
                    {
                        key: "window__ancestor_origins",
                        value: ["https://test.cap.guru"],
                    },
                    {
                        key: "window__tree_index",
                        value: [0],
                    },
                    {
                        key: "window__tree_structure",
                        value: "[[]]",
                    },
                    {
                        key: "window__location_href",
                        value: "https://iframe.arkoselabs.com/E8A75615-1CBA-5DFF-8032-D16BCF234E10/index.html",
                    },
                    {
                        key: "client_config__sitedata_location_href",
                        value: "https://iframe.arkoselabs.com/E8A75615-1CBA-5DFF-8032-D16BCF234E10/index.html",
                    },
                    {
                        key: "client_config__language",
                        value: "fi",
                    },
                    {
                        key: "client_config__surl",
                        value: "https://client-api.arkoselabs.com",
                    },
                    {
                        key: "c8480e29a",
                        value: "165ee51d4a3e27bfeee660c40851de9f⁢",
                    },
                    {
                        key: "client_config__triggered_inline",
                        value: false,
                    },
                    {
                        key: "mobile_sdk__is_sdk",
                        value: false,
                    },
                    {
                        key: "z87b89t5",
                        value: null,
                    },
                    {
                        key: "audio_fingerprint",
                        value: "124.04347776696522",
                    },
                    {
                        key: "navigator_battery_charging",
                        value: true,
                    },
                    {
                        key: "7541c2s",
                        value: "199eba60310b53c200cc783906883c67",
                    },
                    {
                        key: "1f220c9",
                        value: "d99a347770ecf166460560b1c06f8e42",
                    },
                    {
                        key: "a9e2b4c",
                        value: [],
                    },
                    {
                        key: "math_fingerprint",
                        value: "714f4ce18a5b927ccbff76acaf5c4ab7",
                    },
                    {
                        key: "supported_math_functions",
                        value: "58fd7fe702f115c08ed939723f4dcc5d",
                    },
                    {
                        key: "3f76dd27",
                        value: "landscape-primary",
                    },
                    {
                        key: "5dd48ca0",
                        value: 5,
                    },
                    {
                        key: "4b4b269e68",
                        value: "de61ebd3-0f31-46a0-bf4f-b07f4419839b",
                    },
                    {
                        key: "6a62b2a558",
                        value: "cd280b89ad03211d47c64ff7226c9e42",
                    },
                    {
                        key: "is_keyless",
                        value: false,
                    },
                    {
                        key: "client_config__wait_for_settings",
                        value: false,
                    },
                    {
                        key: "c2d2015",
                        value: "29d13b1af8803cb86c2697345d7ea9eb",
                    },
                    {
                        key: "43f2d94",
                        value: [],
                    },
                    {
                        key: "20c15922",
                        value: false,
                    },
                    {
                        key: "4f59ca8",
                        value: null,
                    },
                    {
                        key: "3ea7194",
                        value: {
                            supported: true,
                            formats: ["HDR10", "HLG"],
                            isHDR: false,
                        },
                    },
                    {
                        key: "05d3d24",
                        value: "f23a4c24b3eac00e616555d1e23c67df",
                    },
                    {
                        key: "speech_default_voice",
                        value: "Google Deutsch || de-DE",
                    },
                    {
                        key: "speech_voices_hash",
                        value: "a0c90ca98043f0489c1e731e233b937e",
                    },
                    {
                        key: "83eb055",
                        value: "68934a3e9455fa72420237eb05902327",
                    },
                    {
                        key: "ecb474c",
                        value: "x86",
                    },
                    {
                        key: "93835f9",
                        value: "64",
                    },
                    {
                        key: "9318abc",
                        value: "",
                    },
                    {
                        key: "45b6f33",
                        value: "",
                    },
                    {
                        key: "804b033",
                        value: "Not-A.Brand;99.0.0.0,Google Chrome;157.0.8103.38,Chromium;157.0.8103.38",
                    },
                    {
                        key: "b88d7d5",
                        value: "Desktop",
                    },
                    {
                        key: "81ebcd9",
                        value: false,
                    },
                    {
                        key: "4ca87df3d1",
                        value: "Ow==",
                    },
                    {
                        key: "867e25e5d4",
                        value: "Ow==",
                    },
                    {
                        key: "d4a306884c",
                        value: "Ow==",
                    },
                ],
            },
            {
                key: "fe",
                value: [
                    "DNT:unknown",
                    "L:fr-FR",
                    "D:24",
                    "PR:1",
                    "S:1920,1080",
                    "AS:1920,1080",
                    "TO:-60",
                    "SS:true",
                    "LS:true",
                    "IDB:true",
                    "B:false",
                    "ODB:false",
                    "CPUC:unknown",
                    "PK:Linux x86_64",
                    "CFP:1009570129",
                    "FR:false",
                    "FOS:false",
                    "FB:false",
                    "JSF:Arial,Courier,Courier New,Helvetica,Times,Times New Roman",
                    "P:Chrome PDF Viewer,Chromium PDF Viewer,Microsoft Edge PDF Viewer,PDF Viewer,WebKit built-in PDF",
                    "T:0,false,false",
                    "H:12",
                    "SWF:false",
                ],
            },
            {
                key: "ife_hash",
                value: "7454eec5d0852287b51fa593b2fcdce2",
            },
            {
                key: "jsbd",
                value: '{"HL":2,"NCE":true,"DT":"Authentication","NWD":"false","DMTO":1,"DOTO":1}',
            },
            {
                key: "c",
                value: "Copyright (c) 2026 Arkose Labs. All Rights Reserved.",
            },
        ],
        "https://client-api.arkoselabs.com",
        "E8A75615-1CBA-5DFF-8032-D16BCF234E10",
    ),
);
